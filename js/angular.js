/* 
* @Author: siyizhen
* @Date:   2016-08-16 15:47:05
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-16 15:52:47
*/


angular.module('testApp',[]).controller('namesCtrl',function($scope){
	$scope.names=[
		{name:'siyizhen',country:'china'},
		{name:'Jane',country:'England'},
		{name:'maowang',country:'USA'}
	]
})