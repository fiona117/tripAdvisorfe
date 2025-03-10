import React from 'react';
import {GOOG_API_KEY, GMAP_BASE_URL} from "../constants";
class DrawPoints extends React.Component {
    constructor(){
        super();
        this.state = {
            zoom: 10,
            city: "Los_Angeles,CA",
        };
    }

    processUrl = () => {
        const {selected} = this.props;
        console.log(selected);
        var newurl = GMAP_BASE_URL
        .replace('YOUR_API_KEY',GOOG_API_KEY)
        .replace('YOUR_CITY',this.state.city)
        .replace('YOUR_ZOOM',this.state.zoom);
        for (let i=0;i<selected.length;i++) {
            newurl=newurl.replace('YOUR_MARKER',`${selected[i].latitude},${selected[i].longitude}&markers=YOUR_MARKER`);
        }
        newurl=newurl.replace('markers=YOUR_MARKER&','');
        console.log(newurl);
        return newurl;
    }
    render() {
        return (
            <div>
                <img src={this.processUrl()} className='pointmap'/>
            </div>
        );}
}
export default DrawPoints;