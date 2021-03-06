define(function () {
	var allData = {
	};

	//目录页的数据
	allData.list ={
		data : [
					//9月的数据
					{
						month : '2014.9',
						list : [
							{
								day : '2014.9.4',
								title : '[翻译]Promises',
								url : '2014_9/2014_9_4.html'
							},

							{
								day : '2014.9.9',
								title : 'javascript的模块化',
								url : '2014_9/2014_9_9.html'
							},

							{
								day : '2014.9.15',
								title : 'Backbone分析(1)：基本结构',
								url : '2014_9/2014_9_15.html'
							},

							{
								day : '2014.9.28',
								title : 'javascript中正则表达式的常用方法',
								url : '2014_9/2014_9_28.html'
							}
							
						]

					},

					//6月的数据
					{
						month : '2015.6',
						list : [
							{
								day : '2015.6.11',
								title : 'zepto的一个小bug',
								url : '2015_6/2015_6_11.html'
							}
						]

					},

					{
						month : '2015.9',
						list : [
							{
								day : '2015.9.15',
								title : 'grunt concat 遇到的一个问题',
								url : '2015_9/2015_9_15.html'
							}
						]

					},

				]
	} ;


	//内容页的数据
	allData.content = {
	};

	allData.addData = function ( name, data ){
		if ( typeof name === 'string' && Object.prototype.toString.call(data) === '[object Object]' ) {
			allData.content[name] = data;
		}
	};

	return allData;
});