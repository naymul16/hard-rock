let songName = document.getElementById("song-name")
document.getElementById("search-btn").addEventListener('click',serachResult)

// load search result
function serachResult(){
    fetch(`https://api.lyrics.ovh/suggest/${songName.value}`)
    .then(res => res.json())
    .then(data =>{
        const singleResult = document.getElementsByClassName("single-result");
        for (let i = 0; i < singleResult.length; i++) {
            const loadSongTitle = data.data[i].title
            const loadArtistName = data.data[i].artist.name;
            const loadAlbumName = data.data[i].album.title;
            const element = singleResult[i];
            const songName = document.getElementsByClassName("song-name");
            const artistName = document.getElementsByClassName("song-artist");
            const albumName = document.getElementsByClassName("album-name")
            element.style.display = "block";
            songName[i].innerHTML = loadSongTitle ;
            artistName[i].innerText = loadArtistName;
            albumName[i].innerText = loadAlbumName;
        }
        
    });
}


// get lyric button
document.getElementById("get-lyrics-1").addEventListener('click',function(){
    loadLyric("title-1","artist-1");
})
document.getElementById("get-lyrics-2").addEventListener('click',function(){
    loadLyric("title-2","artist-2");
})
document.getElementById("get-lyrics-3").addEventListener('click',function(){
    loadLyric("title-3","artist-3");
})
document.getElementById("get-lyrics-4").addEventListener('click',function(){
    loadLyric("title-4","artist-4");
})
document.getElementById("get-lyrics-5").addEventListener('click',function(){
    loadLyric("title-5","artist-5");
})
document.getElementById("get-lyrics-6").addEventListener('click',function(){
    loadLyric("title-6","artist-6");
})
document.getElementById("get-lyrics-7").addEventListener('click',function(){
    loadLyric("title-7","artist-7");
})
document.getElementById("get-lyrics-8").addEventListener('click',function(){
    loadLyric("title-8","artist-8");
})
document.getElementById("get-lyrics-9").addEventListener('click',function(){
    loadLyric("title-9","artist-9");
})
document.getElementById("get-lyrics-10").addEventListener('click',function(){
    loadLyric("title-10","artist-10");
})


// load lyric function
function loadLyric(title,artistName){
        document.getElementById("lyrics").style.display = "block"
        const songHeadLine = document.getElementById(title).innerText
        const artist = document.getElementById(artistName).innerText
        const songTitle = document.getElementById("song-title")
        songTitle.innerHTML = `${songHeadLine} - ${artist}`;
        fetch(`https://api.lyrics.ovh/v1/${artist}/${songHeadLine}`)
        .then(res => res.json())
        .then(data =>{
            if(data.error === 'No lyrics found'){
                let fullLyric = document.getElementById("full-lyric");
                fullLyric.innerText = "No lyric found..plz try other song"
            }
            else{
                let fullLyric = document.getElementById("full-lyric");
                fullLyric.innerText = data.lyrics;
            }
            
        })
    }     
    