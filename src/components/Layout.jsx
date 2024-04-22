import React from 'react';
// import Header from './Header';

 const Layout = ({ children }) => {
   return (
     <div className="container mx-auto px-4 py-8">
       <Header />
       {children}
       {/* Add Footer component here later */}
     </div>
   );
 };

 export default Layout;