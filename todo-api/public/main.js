angular.module('angularTodo',[]);

function mainController($scope, $http) {
  $scope.formData = {};
  // es un areglo en formato json que recibe los datos desde el
  //html form
  //angular recibe una funcion y le pregunta a nodejs
  // Cuando se cargue la página, pide del API todos los TODOs
  $http.get('/todos')
  .success(function(data) {
    $scope.todos = data;
	  console.log(data)
    })
  .error(function(data) {
	     console.log('Error: ' + data);
    });
///
// Cuando se añade un nuevo TODO, manda el texto a la API
  $scope.createTodo = function(){
	   $http.post('/todos', $scope.formData)
      .success(function(data) {
		      $scope.formData = {};
		        $http.get('/todos')
    		      .success(function(data) {
     			        $scope.todos = data;
			            console.log(data)
		              })
              .error(function(data) {
			             console.log('Error: ' + data);
       	         });
	          })
        .error(function(data) {
		        console.log('Error:' + data);
	         });
      };

// Borra un TODO despues de checkearlo como acabado
  $scope.deleteTodo = function(id) {
	   $http.delete('/todos/' + id)
     .success(function(data) {
		     $scope.formData = {};
		       $http.get('/todos')
    		     .success(function(data) {
     			       $scope.todos = data;
			          console.log(data)
		          })
              .error(function(data) {
			        console.log('Error: ' + data);
       	      });
	        });
      .error(function(data) {
		      console.log('Error:' + data);
	       });
      };
};
