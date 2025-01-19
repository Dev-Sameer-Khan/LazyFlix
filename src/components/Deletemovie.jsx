import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import { Helmet } from 'react-helmet-async';

const Deletemovie = () => {
  const [data, setData] = useState([]);
      
        // Fetch data when the component mounts
        useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await fetch("http://localhost:3000/movies");
              const result = await res.json();
              setData(result);
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
        }, [data]);

        const handleDelete = async (userId) => {
          const response = await fetch(`http://localhost:3000/movies/${userId}`, { method: 'DELETE' });
          if (response.ok) {
            setUsers(data.filter(user => user.id !== userId));
          } else {
            console.error('Error deleting user');
          }

          alert("Movie Deleted Successfully !")
        };

  
        
  return (
    <section className="deletemovie bg-[#333] min-h-screen w-full text-white pt-14">
      <Helmet>
        <title>Delete Movie | LazyFlix</title>
        <meta name="description" content="Delete Movie Page" />
      </Helmet>
          <header className="flex justify-between items-center mb-6">
            <AdminNav/>
          </header>
          {/* Header */}
    
          {/* Responsive Table */}
          <div className="overflow-x-auto px-12 py-6 max-[599px]:p-0">
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
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 rounded"
                      onClick={() => handleDelete(movie.id)}
                    >
                      Delete
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
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 rounded"
                      onClick={() => handleDelete(movie.id)}
                    >
                      Delete
                    </button>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Deletemovie