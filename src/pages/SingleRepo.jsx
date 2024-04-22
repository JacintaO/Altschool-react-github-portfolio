// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchSingleRepo } from '../utils/api';

// const SingleRepo = () => {
//   const { repoId } = useParams();
//   const [repoDetails, setRepoDetails] = useState(null);

//   useEffect(() => {
//     const fetchRepo = async () => {
//       const data = await fetchSingleRepo('JacintaO', repoId); // Update username
//       setRepoDetails(data);
//     };

//     fetchRepo();
//   }, [repoId]);

//   // Display repo details conditionally based on successful fetch
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold my-4">Repository Details</h1>
//       {repoDetails ? (
//         <div>
//           {/* Display details of the fetched repo */}
//         </div>
//       ) : (
//         <p>Loading repository details...</p>
//       )}
//     </div>
//   );
// };

// export default SingleRepo;




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleRepo } from '../utils/api';

const SingleRepo = () => {
  const { username, repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const data = await fetchSingleRepo(username, repoName);
        setRepoDetails(data);
      } catch (error) {
        setError('Failed to fetch repository details. Please try again later.');
        console.error('Error fetching repository details:', error);
      }
    };

    fetchRepo();
  }, [username, repoName]);

  // Display repo details conditionally based on successful fetch
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Repository Details</h1>
      {error ? (
        <p>{error}</p>
      ) : repoDetails ? (
        <div>
          <h2>{repoDetails.name}</h2>
          <p>{repoDetails.description}</p>
          <p>URL: <a href={repoDetails.html_url} target="_blank" rel="noreferrer">{repoDetails.html_url}</a></p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading repository details...</p>
      )}
    </div>
  );
};

export default SingleRepo;
