import {useContext} from 'react'
import { EntryContext } from '../utilities/globalContext'
import { EntryContextType, Entry } from '../@types/context'
import { useNavigate, Link } from "react-router-dom";

export default function AllEntries(props : {isDarkMode: boolean}){
    const textClass = props.isDarkMode ? 'text-theme-textDark' : 'text-theme-text';
    const removeClass = props.isDarkMode ? 'bg-theme-buttonRemoveDark hover:bg-theme-buttonRemoveHoverDark' : 'bg-theme-buttonRemove hover:bg-theme-buttonRemoveHover';
    const editClass = props.isDarkMode ? 'bg-theme-buttonEditDark hover:bg-theme-buttonEditHoverDark' : 'bg-theme-buttonEdit hover:bg-theme-buttonEditHover';

    const {entries, deleteEntry} = useContext(EntryContext) as EntryContextType
    let navigate = useNavigate();
    if(entries.length == 0){
        return(
            <section>
                <h1 className="text-center font-semibold text-2xl m-5">You don't have any card</h1>
                <p className="text-center font-medium text-md">Lets <Link className={`${textClass} underline underline-offset-1`} to="/create">Create One</Link></p>
            </section>
        )
    }
    return(
        <section className="grid grid-cols-2 md:grid-cols-4">
            {entries.map((entry: Entry, index: number) => {
                return(
                    <div id={entry.id} key={index}className="bg-gray-300 shadow-md shadow-gray-500 m-3 p-4 rounded flex flex-col justify-between">
                        <h1 className="font-bold text-sm md:text-lg">{entry.title}</h1>
                        <p className="text-center text-lg font-light md:mt-2 md:mb-4 mt-1 mb-3">{entry.description}</p>
                        <section className="flex items-center justify-between flex-col md:flex-row pt-2 md:pt-0">
                        <div className="flex justify-center">
                            <button onClick={()=> {deleteEntry(entry.id as string)}} className={`${removeClass}m-1 md:m-2 p-1 font-semibold rounded-md`}>✖</button>
                            <button onClick={()=> {navigate(`/edit/${entry.id}`, { replace: true });}} className={`${editClass}m-1 md:m-2 p-1 font-semibold rounded-md`}>🖊</button>
                        </div>
                        <time className="text-right text-sm md:text-lg">{new Date(entry.created_at.toString()).toLocaleDateString()}</time>
                        </section>
                        
                    </div>
                )
            })}
        </section>
    )
}