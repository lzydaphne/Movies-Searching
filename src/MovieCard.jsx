import React from "react";
// const MovieCard = (props) => {
//   return (
//     console.log(props),
//     (
//       <div className="movie">
//         <div>
//           <p>{props.movie1.Year}</p>
//         </div>
//         <div>
//           <img
//             src={
//               props.movie1.Poster !== "N/A"
//                 ? props.movie1.Poster
//                 : "https://via.placeholder.com/400"
//             }
//             alt="movie1.Title"
//           ></img>
//         </div>
//         <div>
//           <span>{props.movie1.Type}</span>
//           <h3>{props.movie1.Title}</h3>
//         </div>
//       </div>
//     )
//   );
// };
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt="movie.Title"
        ></img>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
