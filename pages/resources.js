import fredricka from '../components/fonts/fredricka';
import CityData from '../components/CityData';
import  resources from './resources.json';
export default function Resources() {
    console.log(resources);
    return(
        <div
        className=''
        >
        {
            resources.map((item) => (
                <CityData key={item.id} data={item}/>
            ))

        }
        </div>
    )
    

}