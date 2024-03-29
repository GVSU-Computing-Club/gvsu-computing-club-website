import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class Social extends React.Component {
    render() {
        return (
            <div className="social-links" >
              {_.map(_.get(this.props, 'pageContext.site.data.social.links'), (link, link_idx) => (
              link && 
              <Link title={_.get(link, 'title')} key={link_idx} to={_.get(link, 'url')} target="_blank" rel="noopener"><span className={'fab ' + _.get(link, 'icon')} aria-hidden="true"/><span className="screen-reader-text">{_.get(link, 'title')}</span></Link>
              ))}
            </div>
        );
    }
}
