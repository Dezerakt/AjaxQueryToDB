
var sb = $("#search-bar");
var index = 7

$(sb).keyup(function (e) { 
    $("td").each(function(){
            if($(this).text().toLowerCase() == $(sb).val().toLowerCase()){
                $(this).parents("tr").addClass("res");
                $("tr:not(.res)").addClass("hid");
            }    
            else if($(sb).val() == ""){
                $(this).parents("tr").removeClass("res");
                $("tr:not(.res)").removeClass("hid");
            }
    })
});  


// $.getJSON('data.php', function(result){
//   $("#btn").click(function(){ 
//     result.forEach(e =>{ 
//       $('.tb').append(`<tr>
//       <td>${index}</td>
//       <td>${e.name}</td>
//       <td>${e.role}</td>
//       <td>${e.active}</td>
//       </tr>`)
//       index++;
//     })
//   });
// });


// $.ajax({
//     type: 'POST',
//     url: 'users.php',
//     data: 'users : arr',
//     success: function(data){
//         alert(arr);
//     }
// });

// $.ajax({
//     type: "POST",
//     url: "users.php",
//     data: "data",
//     dataType: {PageType:PageType, method:'searchTitle'},
//     success: function (data) {
//         alert(data);
//     }
// });
var shet = 0;

$('#btn').click(function(){
    axios.get('users.php').then(response => {
        console.log(response.data[0].Id);
        $('.tb').append(`<tr>
            <td>${index}</td>
            <td>${response.data[shet].user_name}</td>
            <td>${response.data[shet].role_name}</td>
            <td>${response.data[shet].login}</td>
            </tr>`)
            index++;      
            shet++;     
    })
})

