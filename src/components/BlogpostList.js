import React from 'react';
import { connect } from 'react-redux';
import '../css/BlogpostList.css';
import { deleteBlogpostThunk } from '../thunks/thunks';

class BlogpostList extends React.Component {
  render() {
    return (
      <div className="blogpostlist__container">
        <h2>Blog posts</h2>
        <table className="blogpostlist__table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.blogposts.map((blogpost) => (
              <tr key={blogpost.postid}>
                <td>{blogpost.posttitle}</td>
                <td>{blogpost.username}</td>
                <td>
                  {blogpost.postdate && <>{new Date(blogpost.postdate).toLocaleDateString()}</>}
                </td>
                <td>
                  {blogpost.postid && (
                    <>
                      <button onClick={() => alert('updated')}>Update</button>
                      <button onClick={() => this.props.onDeletePressed(blogpost)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blogposts: state.blogposts,
});

const mapDispatchToProps = (dispatch) => ({
  onDeletePressed: (blogpost) => {
    dispatch(deleteBlogpostThunk(blogpost));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogpostList);
