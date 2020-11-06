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
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Delete</th>
          </tr>
          {this.props.blogposts.map((blogpost) => (
            <tr>
              <td>{blogpost.posttitle}</td>
              <td>{blogpost.username}</td>
              <td>
                <button onClick={() => this.props.onDeletePressed(blogpost)}>Do something</button>
              </td>
            </tr>
          ))}
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