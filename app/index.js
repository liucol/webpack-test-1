/**
 * Created by yangliu on 2017/4/19.
 */
import _ from 'lodash';
function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
}

document.body.appendChild(component());
