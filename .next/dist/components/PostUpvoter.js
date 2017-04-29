'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/with-apollo/components/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      votes\n    }\n  }\n'], ['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      votes\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('button', { onClick: function onClick() {
      return upvote(id, votes + 1);
    }, 'data-jsx': 2734071884,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, votes, _react2.default.createElement(_style2.default, {
    styleId: 2734071884,
    css: 'button[data-jsx="2734071884"] {background-color: transparent;border: 1px solid #e4e4e4;color: #000;}button[data-jsx="2734071884"]:active {background-color: transparent;}button[data-jsx="2734071884"]:before {align-self: center;border-color: transparent transparent #000000 transparent;border-style: solid;border-width: 0 4px 6px 4px;content: "";height: 0;margin-right: 5px;width: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBQ0YsK0JBQ3dCLDhCQUNKLDBCQUNkLFlBQ2IsQ0FDYyxzQ0FDaUIsOEJBQy9CLENBQ2Msc0NBQ00sbUJBQ3VDLDBEQUN0QyxvQkFDUSw0QkFDaEIsWUFDRixVQUNRLGtCQUNULFNBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUGFydGgvRG9jdW1lbnRzL3RoaXJkVHJ5L3dpdGgtYXBvbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoaWQsIHZvdGVzICsgMSl9PlxuICAgICAge3ZvdGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCA0cHggNnB4IDRweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBpZFxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoaWQsIHZvdGVzKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkLCB2b3RlcyB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBpZDogb3duUHJvcHMuaWQsXG4gICAgICAgICAgdm90ZXM6IG93blByb3BzLnZvdGVzICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuIl19 */\n/*@ sourceURL=components/PostUpvoter.js */'
  }));
}

var upvotePost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: { id: id, votes: votes },
          optimisticResponse: {
            updatePost: {
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter);