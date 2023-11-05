import 'ka-table/style.css';
import { Table } from 'ka-table';
import user from '../assets/blogger.jpg'
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
const FeaturedBlogs = () => {
    const dataArray = Array(10)
  .fill(undefined)
  .map((_, index) => ({
    column1: `${index}`,
    column2: `Hidden Gems: 10 Beautiful Places You Must Visit`,
    column3: `Mursalin Mir`,
    column4: user,
    id: index,
  }));
    return (
        <div className="mt-20 w-10/12 mx-auto">
            <Table
      columns={[
        { key: 'column1', title: 'Serial Number', dataType: DataType.String },
        { key: 'column2', title: 'Blog Title', dataType: DataType.String },
        { key: 'column3', title: 'Blog Owner', dataType: DataType.String },
        { key: 'column4', title: 'Profile picture', dataType: DataType.String },
      ]}
      data={dataArray}
    //   editingMode={EditingMode.Cell}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />
        </div>
    );
};

export default FeaturedBlogs;