import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import DataTable from "react-data-table-component";
import FeaturedBlogsSkeleton from "../components/FeaturedBlogsSkeleton";
import "./FeaturedBlogs.css";
import useAxiosPublic from "../useHooks/useAxiosPublic";

const FeaturedBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["featuredBlogsList"],
    queryFn: async () => {
      const getFeaturedData = await axiosPublic.get(
        "/featured-blogs"
      );
      return getFeaturedData.data;
    },
  });
  if (isLoading) {
    return <FeaturedBlogsSkeleton></FeaturedBlogsSkeleton>;
  }
  let tableData = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    tableData.push({
      blogTitle: data[i]?.blogTitle,
      blogOwner: data[i]?.bloggerName,
      ownerProfilePicture: data[i]?.bloggerImage,
    });
  }
  console.log("new table is", tableData);

  const columns = [
    {
      name: "Serial Number",
      cell: (row, index) => index + 1,
      sortable: false,
    },
    {
      name: "Blog Title",
      selector: "blogTitle",
      sortable: false,
    },
    {
      name: "Blog Owner",
      selector: "blogOwner",
      sortable: false,
    },
    {
      name: "Owner Profile Picture",
      cell: (row) => (
        <img
          src={row.ownerProfilePicture}
          alt="Profile"
          style={{ width: "70px" }}
        />
      ),
    },
  ];

  return (
    <motion.div
      className="w-10/12 mx-auto text-base pt-10"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <DataTable title="Top 10 Blog" columns={columns} data={tableData} />
      </div>
    </motion.div>
  );
};

export default FeaturedBlogs;
