import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="border border-gray-300 rounded p-4">
      <h2 className="text-lg font-bold">{repo.name}</h2>
      <p className="text-gray-600">{repo.description}</p>
      <a href={repo.html_url} className="text-blue-600 mt-2 block" target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;


// import React from 'react';

// const RepoCard = ({ repo }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{repo.name}</div>
//         <p className="text-gray-700 text-base">{repo.description}</p>
//       </div>
//       <div className="px-6 py-4">
//         <a href={repo.html_url} className="text-blue-600 mt-2 block" target="_blank" rel="noreferrer">
//           View on GitHub
//         </a>
//       </div>
//     </div>
//   );
// };

// export default RepoCard;

