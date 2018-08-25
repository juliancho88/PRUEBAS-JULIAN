const init = () => {
    $('#movie_search').on('keyup', (e) => {
        console.log(e);
        if (e.keyCode ==13) {
            var movie = document.getElementById('movie_search').value;
            if (movie.length <= 0) alert ('Por favor ingrese un numero de pelicula para poder ejecutar la busqueda')
            else load_movies(movie); 
        } 
        
    });
}

const load_movies = (movie) => {
    const mykey = '61bc7837';
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey='+ mykey + '&s=' + movie +'& page=1'
        , dataType: 'json'
        , type: 'post'
        , success: (response) => {
            console.log(response);
            show_movies(response.Search, 'movie_results');
        }
        , error: () => {
            console.log('me revente');
        }


    });
}
const show_movies = (results, div) => {
    let container = document.getElementById(div);
    container.innerHTML = '';
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    for (let i of results) {
        let col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 col-cs-12';
        row.appendChild(col);
        let t_div = document.createElement('div');
        t_div.className='thumbnail';
        col.appendChild(t_div);
        let t_img = document.createElement('img');
        t_img.src = i.Poster;
        t_div.appendChild(t_img);
    }

}