const API_KEY= "AIzaSyCa8NhjuTbSFia80fckzXbK9nagLJkdR4o"

export const POPULAR_VIDEOS=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
