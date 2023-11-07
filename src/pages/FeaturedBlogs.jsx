import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './FeaturedBlogs.css';

const FeaturedBlogs = () => {

  const {data, isLoading} = useQuery({
    queryKey: ['featuredBlogsList'],
    queryFn: async() => {
        const getFeaturedData = await axios.get('http://localhost:5000/featured-blogs');
        return getFeaturedData.data;
    }
  })
if(isLoading){
  return <div className='flex justify-center items-center w-full h-96'><h3 className='text-4xl'>Table Loading....</h3></div>
}
let tableData = [];
for(let i = 0; i < data.length; i++){
  console.log(data[i]);
  tableData.push({blogTitle:data[i]?.blogTitle, blogOwner: data[i]?.bloggerName, ownerProfilePicture: data[i]?.bloggerImage})
}
console.log('new table is',tableData);

const columns = [
  {
    name: 'Serial Number',
    cell: (row, index) => index + 1,
    sortable: false,
  },
  {
    name: 'Blog Title',
    selector: 'blogTitle',
    sortable: false,
  },
  {
    name: 'Blog Owner',
    selector: 'blogOwner',
    sortable: false,
  },
  {
    name: 'Owner Profile Picture',
    cell: (row) => <img src={row.ownerProfilePicture} alt="Profile" style={{ width: '70px' }} />,
  },
];



  return (
    <div className='w-10/12 mx-auto text-base pt-20'>
      <div className=''>
      <DataTable
      title="Top 10 Blog"
      columns={columns}
      data={tableData}
    />
      </div>
    </div>
  );

};

export default FeaturedBlogs;