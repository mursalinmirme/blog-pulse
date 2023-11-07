import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { FiBookmark } from 'react-icons/fi';
import SingleBlogForAllBlog from "../components/SingleBlogForAllBlog";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AllBlogs = () => {
    const [categoryValue, setcategoryValue] = useState('All');
    const [searchVal, setSearchVal] = useState(null);
    const [ showBlogs, setShowBlogs ] = useState([]);
    // console.log('category value is:', categoryValue);
    const {data, isLoading} = useQuery({
        queryKey: [categoryValue],
        queryFn: async() => {
            const fetch = await axios.get(`http://localhost:5000/allblogs?display=${categoryValue}`);
            const data = await fetch.data;
            setShowBlogs(data);
            return data;
        }
    })


    const category = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const cateFatch = await axios.get('http://localhost:5000/categories');
            const categori = await cateFatch.data;
            return categori;
        }
    });
    // search system
        const {data: searchResult} = useQuery({
            queryKey: [searchVal, setSearchVal],
            queryFn: async() => {
                if(searchVal){
                const searchBlogFatch = await axios.get(`http://localhost:5000/searchBlog?search=${searchVal}`);
                const searchBlog = await searchBlogFatch.data;
                setShowBlogs(searchBlog);
                return searchBlog;
                }
                return[];
            }
        });
    console.log('Show blogs are',showBlogs);
    const handleSearchSystem = (e) => {
        // setSearchVal('')
        e.preventDefault();
        const searchValue = e.target.search.value;
        setSearchVal(searchValue);
    }

    const handleCategoryVlue = (event) => {
        setSearchVal('');
        setcategoryValue(event.target.value)
    }

    return (
        <div className="mt-20 w-10/12 mx-auto">
            <div className="flex items-center justify-between">
               <h3 className="text-2xl font-semibold">All Blogs </h3>
               <div className="flex relative">
                 <form onSubmit={handleSearchSystem}>
                    <input className="px-4 py-3 border border-gray-500 w-96 outline-none" type="text" name="search" id="" placeholder="Search a blog" />
                    <Button type="submit" style={{background: '#A3B18A', color: 'white', borderRadius: '0', position: 'absolute', right: '0', top: '0', height: '100%', paddign: '-2px'}} className="w-20 flex justify-center items-center">Search</Button>
                 </form>
               </div>
               <div>
               {/* <FormControl sx={{ m: 1, width: 'auto' }}> */}
                <Select
                    value={categoryValue}
                    // onChange={(event) => setcategoryValue(event.target.value)}
                    onChange={handleCategoryVlue}
                >
                    <MenuItem value={'All'}>All</MenuItem>
                    {
                        category?.data?.map((cate, indx) => {
                            return <MenuItem key={cate._id} value={cate.name}>{cate.name}</MenuItem>
                        })
                    }
                </Select>
                {/* </FormControl> */}
               </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
                {
                    showBlogs?.map(singleBlog => <SingleBlogForAllBlog key={singleBlog._id} singleBlog={singleBlog}></SingleBlogForAllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;