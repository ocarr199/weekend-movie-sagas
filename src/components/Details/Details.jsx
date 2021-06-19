import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres)
    console.log('IN DETAILS ROUTE',details)

    // const filteredGenres = genres.filter(genre => {
    //   genre.title == details.title
    //   console.log('in filter')
    // })

    return (
      <>
        <h1>{details.title}</h1>
     <img src={details.poster}></img>
     <p>{details.description}</p>
     {/* <ul>
     {filteredGenres.map(filtered => {
            console.log(filtered)
                    return (
                    <li>{filtered.title}</li>
                    );
                })}
     </ul> */}
      </>
    );
  }
  
  
  export default Details;