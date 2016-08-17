/* 
* @Author: siyizhen
* @Date:   2016-08-17 16:56:17
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-17 17:02:08
*/

app.controller('myNoteController',function($scope){
	$scope.message='';
	$scope.nums=function(){
		return 100-$scope.message.length;
	};
	$scope.save=function(){
		alert($scope.message);
	};
	$scope.reset=function(){
		$scope.message='';
	}
})