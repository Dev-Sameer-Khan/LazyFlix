import React, { useEffect, useRef, useState } from 'react'
import AdminNav from './AdminNav'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Editmovie = () => {
  const [data, setData] = useState([]);
    const show = useRef(null);  

  const [movieName, setMovieName] = useState("");
      const [releaseYear, setReleaseYear] = useState(null);
      const [rating, setRating] = useState(null);
      const [length, setLength] = useState("");
      const [views, setViews] = useState(null);
      const [directorName, setDirectorName] = useState("");
      const [genre, setGenre] = useState([]);
      const [cast, setCast] = useState([]);
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
              const result = await res.json();
              setData(result.movies);
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
        }, [data]);

        const togglehideshow = () => {
          show.current.style.display = 'block';
        }
  
        const navigate = useNavigate();
        const handlemovie = (name)=>{
          window.localStorage.setItem('movieId', JSON.stringify(name));
          const url = `/movies/${name}`;

          window.open(url, '_blank');
        }

        const handlesubmit = (e) => {
          
          e.preventDefault();
          show.current.style.display = 'none';
        }

  return (
    <section className="editmovie bg-[#333] w-full min-h-auto text-white pt-14 relative">
      <Helmet>
        <title>Edit Movie | LazyFlix</title>
        <meta name="description" content="Edit a movie in LazyFlix admin panel" />
      </Helmet>
          <header className="flex justify-between items-center mb-6">
            <AdminNav/>
          </header>
          {/* Header */}
    
          {/* Responsive Table */}
          <div className="overflow-x-auto px-12 py-6 max-[599px]:p-0">
          <div
          ref={show}
  className="w-[93%] hidden z-[99] absolute max-[599px]:ml-4 mb-10 h-auto bg-[#1a1a1a] shadow-lg backdrop-blur-md border-[#333] rounded-lg border-[1px] p-6 max-[599px]:p-4"
>
  <h2 className="text-3xl text-[#C40C0C] text-center mb-6 font-[bold]">Edit Movie Details</h2>
  <form
    onSubmit={(e) => handlesubmit(e)}
    className="w-full flex flex-col gap-6"
  >
    {[
      { label: "Movie Name ", type: "text", name: "movieName", required: true, value: movieName, onChange: (e) => setMovieName(e.target.value) },
      { label: "Release Year ", type: "number", name: "releaseYear", required: true, value: releaseYear, onChange: (e) => setReleaseYear(e.target.value) },
      { label: "Rating ", type: "number", name: "rating", step: "0.1", value: rating, onChange: (e) => setRating(e.target.value) },
      { label: "Length ", type: "text", name: "length", required: true, value: length, onChange: (e) => setLength(e.target.value) },
      { label: "Views ", type: "number", name: "views", value: views, onChange: (e) => setViews(e.target.value) },
      { label: "Director Name ", type: "text", name: "directorName", value: directorName, onChange: (e) => setDirectorName(e.target.value) },
      { label: "Genre (comma-separated) ", type: "text", name: "genre", value: genre, onChange: (e) => setGenre(e.target.value) },
      { label: "Cast (comma-separated) ", type: "text", name: "cast", value: cast, onChange: (e) => setCast(e.target.value) },
      { label: "Banner (Big) Link ", type: "url", name: "bannerBig", required: true, value: bannerBig, onChange: (e) => setBannerBig(e.target.value) },
      { label: "Banner (Small) Link ", type: "url", name: "bannerSmall", value: bannerSmall, onChange: (e) => setBannerSmall(e.target.value) },
      { label: "Category ", type: "text", name: "category", required: true, value: category, onChange: (e) => setCategory(e.target.value) },
      { label: "Watch Link ", type: "url", name: "watchLink", required: true, value: watchLink, onChange: (e) => setWatchLink(e.target.value) },
      { label: "Show Type ", type: "text", name: "showType", value: showType, onChange: (e) => setShowType(e.target.value) },
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
        className="w-full font-[regular] bg-[#2a2a2a] text-white border border-[#444] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C40C0C]"
        name="description"
        rows="4"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
                {data.map((movie) => (
                  <tr key={movie.id} className="hover:bg-[#C40C0C] transition-all font-[semibold] ">
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
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded"
                      onClick={() => {
                        setMovieName(movie.movieName);
                        setReleaseYear(movie.releaseYear);
                        setRating(movie.rating);
                        setLength(movie.length);
                        setViews(movie.views);
                        setDirectorName(movie.directorName);
                        setGenre(movie.genre);
                        setCast(movie.cast);
                        setBannerBig(movie.bannerBig);
                        setBannerSmall(movie.bannerSmall);
                        setCategory(movie.category);
                        setDescription(movie.description);
                        setWatchLink(movie.watchLink);
                        setShowType(movie.showType);
                        togglehideshow();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-1 px-3 rounded"
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
              {data.map((movie) => (
                <div
                  key={movie.id}
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
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded"
                      onClick={() => {
                        setMovieName(movie.movieName);
                        setReleaseYear(movie.releaseYear);
                        setRating(movie.rating);
                        setLength(movie.length);
                        setViews(movie.views);
                        setDirectorName(movie.directorName);
                        setGenre(movie.genre);
                        setCast(movie.cast);
                        setBannerBig(movie.bannerBig);
                        setBannerSmall(movie.bannerSmall);
                        setCategory(movie.category);
                        setDescription(movie.description);
                        setWatchLink(movie.watchLink);
                        setShowType(movie.showType);
                        togglehideshow();
                      }}
                    >
                      Edit
                    </button>
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

export default Editmovie