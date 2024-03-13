import PropTypes from 'prop-types';
import batchIcon from '../../../assets/images/batch.webp'

const Blog = ({ blog }) => {
    console.log(blog);
    const { author, author_img, categories, coverphoto, postdate, postdetails, readingtime, title } = blog
    return (
        <div>
            <div >
                <div>
                    <img src={coverphoto} className='w-full rounded-xl' alt="Cover Photo" />
                </div>
                <div className='flex justify-between mt-5 items-center'>
                    <div className='flex gap-6'>
                        <div>
                            <img src={author_img} className='w-20 h-20 rounded-full' alt="Profile Photo" />
                        </div>
                        <div className='flex flex-col justify-center my-5'>
                            <h3 className='font-semibold'>{author}</h3>
                            <h4>{postdate}</h4>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>{readingtime} min read</p>
                        <img src={batchIcon} className='w-8 h-8' alt="" />

                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p>{postdetails?.content}</p>

                </div>
                <div className='mt-3 flex gap-4 text-gray-500'>
                    {
                        categories.map((category,idx) => <span key={idx}> <a href='#'> #{category}</a></span>)
                    }
                </div>
                <div className='mb-7 mt-3'>
                    <p>Mark as read</p>
                </div>
                <hr />
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;