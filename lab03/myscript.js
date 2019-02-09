$('#advance').hide();

$(document).ready(function() {

    $('#show-advance-search-btn').click(function() {
        if ($('#advance').css('display') == "none"){
            $('#show-advance-search-btn').text("Advance search : on")
            $('#advance').show();
            $('#standard').hide();
            $('#search-intro').hide();
        }
        else{
            $('#show-advance-search-btn').text("Advance search : off")
            $('#advance').hide();
            $('#standard').show();
            $('#search-intro').show();
        }
    })

    $('#search-btn').click(search);
    $('#input-text').keypress(function (e) {
        if (e.which == 13) {
            $('#search-btn').trigger('click'); 
        }
    });
    function search(){
        $.ajax({
            url: "data.json",
            dataType: "json"
        }).done(function(response) {
            var html = '';
            $('#table-body').empty();
            response.forEach(element => {
                if ($('#input-text').val() == "" && $('#select').children("option:selected").val() != "Boss"){
                    html += '<tr>';
                    html += '<th>' + element.name + '</th>';
                    html += '<td>' + element.level + '</td>';
                    html += '<td>' + element.size + '</td>';
                    html += '<td>' + element.element + '</td>';
                    html += '<td>' + element.race + '</td>';
                    html += '<td>' + element.HP + '</td>';
                    html += '</tr>';
                }
                else if ($('#input-text').val() == "" && $('#select').children("option:selected").val() == "Boss"){
                    if (element.name.includes("★")){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                }
                else if ($('#input-text').val() != ""){
                    if ($('#select').children("option:selected").val() == "Name"){
                        if (element.name.includes($('#input-text').val())){
                            html += '<tr>';
                            html += '<th>' + element.name + '</th>';
                            html += '<td>' + element.level + '</td>';
                            html += '<td>' + element.size + '</td>';
                            html += '<td>' + element.element + '</td>';
                            html += '<td>' + element.race + '</td>';
                            html += '<td>' + element.HP + '</td>';
                            html += '</tr>';
                        }
                    }
                    else if ($('#select').children("option:selected").val() == "Size"){
                        if (element.size.includes($('#input-text').val())){
                            html += '<tr>';
                            html += '<th>' + element.name + '</th>';
                            html += '<td>' + element.level + '</td>';
                            html += '<td>' + element.size + '</td>';
                            html += '<td>' + element.element + '</td>';
                            html += '<td>' + element.race + '</td>';
                            html += '<td>' + element.HP + '</td>';
                            html += '</tr>';
                        }
                    }
                    else if ($('#select').children("option:selected").val() == "Element"){
                        if (element.element.includes($('#input-text').val())){
                            html += '<tr>';
                            html += '<th>' + element.name + '</th>';
                            html += '<td>' + element.level + '</td>';
                            html += '<td>' + element.size + '</td>';
                            html += '<td>' + element.element + '</td>';
                            html += '<td>' + element.race + '</td>';
                            html += '<td>' + element.HP + '</td>';
                            html += '</tr>';
                        }
                    }
                    else if ($('#select').children("option:selected").val() == "Race"){
                        if (element.race.includes($('#input-text').val())){
                            html += '<tr>';
                            html += '<th>' + element.name + '</th>';
                            html += '<td>' + element.level + '</td>';
                            html += '<td>' + element.size + '</td>';
                            html += '<td>' + element.element + '</td>';
                            html += '<td>' + element.race + '</td>';
                            html += '<td>' + element.HP + '</td>';
                            html += '</tr>';
                        }
                    }
                    else if ($('#select').children("option:selected").val() == "Boss"){
                        if (element.name.includes("★") && element.name.includes($('#input-text').val())){
                            html += '<tr>';
                            html += '<th>' + element.name + '</th>';
                            html += '<td>' + element.level + '</td>';
                            html += '<td>' + element.size + '</td>';
                            html += '<td>' + element.element + '</td>';
                            html += '<td>' + element.race + '</td>';
                            html += '<td>' + element.HP + '</td>';
                            html += '</tr>';
                        }
                    }
                }
            });
            $('#table-body').append(html);
        })
    }


    $('#input-text-advance').keypress(function (e) {
        if (e.which == 13) {
            $('#advance-search-btn').trigger('click'); 
        }
    });
    $('#advance-search-btn').click(function(){
        $.ajax({
            url: "data.json",
            dataType: "json"
        }).done(function(response) {
            var html = '';
            $('#table-body').empty();
            response.forEach(element => {
                
                    var name = $('#input-text-advance').val();
                    var size = $('#advance-size').children("option:selected").val();
                    var element0 = $('#advance-element').children("option:selected").val();
                    var race = $('#advance-race').children("option:selected").val();

                    if ((size != "All" && element0 != "All" && race != "All") && element.size == size && element.element == element0 && element.race == race && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                    else if (size == "All" && element.element == element0 && element.race == race && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                    else if (element0 == "All" && element.size == size && element.race == race && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                    else if (race == "All" && element.element == element0 && element.size == size && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                    else if (size == "All" && element0 == "All" && element.race == race && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                    else if (element0 == "All" && element.size == size && race == "All" && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                    else if (race == "All" && element.element == element0 && size == "All" && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                    else if (race == "All" && element0 == "All" && size == "All" && element.name.includes(name)){
                        html += '<tr>';
                        html += '<th>' + element.name + '</th>';
                        html += '<td>' + element.level + '</td>';
                        html += '<td>' + element.size + '</td>';
                        html += '<td>' + element.element + '</td>';
                        html += '<td>' + element.race + '</td>';
                        html += '<td>' + element.HP + '</td>';
                        html += '</tr>';
                    }
                
            });
            $('#table-body').append(html);
        })
    })
    
});