import React, { useEffect, useRef, useState } from 'react'
import AdminNav from './AdminNav'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Addmovie = () => {

  const [data, setData] = useState([]);

  const [movieName, setMovieName] = useState("");
      const [releaseYear, setReleaseYear] = useState("");
      const [rating, setRating] = useState("");
      const [length, setLength] = useState("");
      const [views, setViews] = useState("");
      const [directorName, setDirectorName] = useState("");
      const [genre, setGenre] = useState("");
      const [cast, setCast] = useState("");
      const [bannerBig, setBannerBig] = useState("");
      const [bannerSmall, setBannerSmall] = useState("");
      const [category, setCategory] = useState("");
      const [description, setDescription] = useState("");
      const [watchLink, setWatchLink] = useState("");
      const [type, setType] = useState("");
      const [showType, setShowType] = useState("");
      const [trailerLink, setTrailerLink] = useState("");
      
        // Fetch data when the component mounts
        useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await fetch("https://lazycodwr.github.io/api/db.json");
              const result = await res.json(data);
              setData(result.movies);
            } catch (error) {
              console.error(error);
            }
            
          };
          
          fetchData();
        }, [data]);
        
        const handlesubmit = async (e) => {
          
          e.preventDefault();

          const MovieData = {movieName, releaseYear, rating, length, views, directorName, genre, cast, bannerBig, bannerSmall, category, description, watchLink, trailerLink, type, showType};

          try {
            const response = await fetch('https://lazycodwr.github.io/api/db.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(MovieData),
            });

            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            await response.json();
          } catch (error) {
            console.error('Error sending data to server:', error);
          }
          
          setMovieName("");
          setReleaseYear("");
          setRating("");
          setLength("");
          setViews("");
          setDirectorName("");
          setGenre("");
          setCast("");
          setBannerBig("");
          setBannerSmall("");
          setCategory("");
          setDescription("");
          setWatchLink("");
          setType("");
          setTrailerLink("")
          setShowType("");           

          alert('Movie added successfully');
        }


        const navigate = useNavigate();
  const handlemovie = (name)=>{
    window.localStorage.setItem('movieId', JSON.stringify(name));
    const url = `/movies/${name}`;

    window.open(url, '_blank');
  }
        
  return (
    <section className="addmovie bg-[#333] min-h-screen w-full text-white pt-20 px-12 py-6 max-[599px]:p-0 max-[599px]:pt-14 flex items-center flex-col justify-center">
      <Helmet>
        <title>Add Movie | LazyFlix</title>
        <meta name="description" content="Add a new movie to LazyFlix database" />
      </Helmet>
          <header className="flex justify-between items-center mb-6">
            <AdminNav/>
          </header>
          
          <div className='w-full flex justify-end mb-4'>
          </div>
          <div
  className="w-full max-[599px]:w-[93%] mb-10 h-auto bg-[#1a1a1a] shadow-lg backdrop-blur-md border-[#333] rounded-lg border-[1px] p-6 max-[599px]:p-4"
>
  <h2 className="text-3xl text-[#C40C0C] text-center mb-6 font-[bold]">Add Movie Details</h2>
  <form
    onSubmit={(e) => handlesubmit(e)}
    className="w-full flex flex-col gap-6"
  >
    {[
      { label: "Movie Name ", type: "text", name: "movieName", required: true, value : movieName, onChange: (e) => setMovieName(e.target.value)},
      { label: "Release Year ", type: "number", name: "releaseYear", required: true, value : releaseYear, onChange: (e) => setReleaseYear(e.target.value),},
      { label: "Rating ", type: "number", name: "rating", step: "0.1", value : rating, onChange: (e) => setRating(e.target.value)},
      { label: "Length ", type: "text", name: "length", required: true, value : length, onChange: (e) => setLength(e.target.value)},
      { label: "Views ", type: "number", name: "views", value : views, onChange: (e) => setViews(e.target.value)},
      { label: "Director Name ", type: "text", name: "directorName", value : directorName, onChange: (e) => setDirectorName(e.target.value)},
      { label: "Genre (comma-separated) ", type: "text", name: "genre", value : genre, onChange: (e) => setGenre(e.target.value)},
      { label: "Cast (comma-separated) ", type: "text", name: "cast", value : cast, onChange: (e) => setCast(e.target.value)},
      { label: "Banner (Big) Link ", type: "url", name: "bannerBig", required: true, value : bannerBig, onChange: (e) => setBannerBig(e.target.value)},
      { label: "Banner (Small) Link ", type: "url", name: "bannerSmall", value : bannerSmall, onChange: (e) => setBannerSmall(e.target.value)},
      { label: "Category ", type: "text", name: "category", required: true, value : category, onChange: (e) => setCategory(e.target.value)},
      { label: "Watch Link ", type: "url", name: "watchLink", required: true, value : watchLink, onChange: (e) => setWatchLink(e.target.value)},
      { label: "Trailer Link ", type: "url", name: "trailerurl", value : trailerLink, onChange: (e) => setTrailerLink(e.target.value)},
      { label: "Show Type ", type: "text", name: "showType", value : showType, onChange: (e) => setShowType(e.target.value)},
      { label: "Type ", type: "text", name: "Type", value : type, onChange: (e) => setType(e.target.value)},
    ].map(({ label, type, name, ...rest }, index) => (
      <div key={index} className="flex flex-col gap-2">
        <label className="text-white font-medium font-[semibold]">{label}:</label>
        <input
          className="w-full font-[regular] bg-[#2a2a2a] text-white border border-[#444] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C40C0C]"
          type={type}
          name={name}
          {...rest}
        />
      </div>
    ))}
    <div className="flex flex-col gap-2">
      <label className="text-white font-[semibold]">Description :</label>
      <textarea
      onChange={e => setDescription(e.target.value)}
      value={description}
        className="w-full font-[regular] bg-[#2a2a2a] text-white border border-[#444] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C40C0C]"
        name="description"
        rows="4"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-[#C40C0C] text-white font-[semibold] rounded-lg py-3 hover:bg-[#c20000] transition"
    >
      Submit
    </button>
  </form>
</div>

<div className="overflow-x-auto w-full">
            <table className="table-auto w-full text-left hidden sm:table border-collapse border border-gray-700">
              <thead >
                <tr className="bg-[#C40C0C] text-sm uppercase font-[bold] ">
                  <th className="px-4 py-2 border border-[#C40C0C]">ID</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Poster</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Title</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Genre</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Year</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Duration</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Rating</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Category</th>
                  <th className="px-4 py-2 border border-[#C40C0C]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((movie , index) => (
                  <tr key={index} className="hover:bg-[#C40C0C] transition-all font-[semibold] ">
                    <td className="px-4 py-2 border border-[#C40C0C]">{movie.id}</td>
                    <td className="px-4 py-2 border border-[#C40C0C]">
                      <img
                        src={movie.bannerSmall}
                        alt={movie.title}
                        className="w-12 h-auto rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border border-[#C40C0C]">{movie.movieName}</td>
                    <td className="px-4 py-2 border border-[#C40C0C]">{movie.genre}</td>
                    <td className="px-4 py-2 border border-[#C40C0C]">{movie.releaseYear}</td>
                    <td className="px-4 py-2 border border-[#C40C0C]">{movie.length}</td>
                    <td className="px-4 py-2 border border-[#C40C0C]">{movie.rating}</td>
                    <td className="px-4 py-2 border border-[#C40C0C]">{movie.category}</td>
                    <td className="px-4 py-2 border border-[#C40C0C]">
                        <div className="flex space-x-2">
                    <button
                      className="bg-gray-600 hover:bg-gray-700 text-white font-[semibold] py-1 px-3 rounded"
                      onClick={() => handlemovie(movie.movieName)}
                    >
                      Preview
                    </button>
                  </div></td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
    
            {/* Mobile View */}
            <div className="sm:hidden">
              {data.map((movie , index) => (
                <div
                  key={index}
                  className=" backdrop-blur-sm p-4 rounded-lg mb-4 shadow-md"
                >
                  <div className="flex items-center mb-3">
                    <img
                      src={movie.bannerSmall}
                      alt={movie.movieName}
                      className="w-16 h-auto rounded mr-4"
                    />
                    <div>
                      <h2 className="font-bold text-lg">{movie.movieName}</h2>
                      <p className="text-sm text-gray-400">{movie.genre}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">
                    <p>
                      <span className="font-bold">Year:</span> {movie.releaseYear}
                    </p>
                    <p>
                      <span className="font-bold">Duration:</span> {movie.length}
                    </p>
                    <p>
                      <span className="font-bold">Rating:</span> {movie.rating}
                    </p>
                    <p>
                      <span className="font-bold">Language:</span> {movie.category}
                    </p>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button
                      className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-1 px-3 rounded"
                      onClick={() => handlemovie(movie.movieName)}
                    >
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </section>
  )
}

export default Addmovie