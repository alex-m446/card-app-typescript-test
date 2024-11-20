import {useState, useContext, ChangeEvent, MouseEvent} from 'react'
import {EntryContext} from '../utilities/globalContext'
import {Entry, EntryContextType} from '../@types/context'

export default function NewEntry(props : {isDarkMode: boolean}){
    const updateClass = props.isDarkMode ? 'bg-theme-buttonUpdateDark hover:bg-theme-buttonUpdateHoverDark' : 'bg-theme-buttonUpdate hover:bg-theme-buttonUpdateHover';

    const emptyEntry: Entry = {title: "", description: "",created_at: new Date(), scheduled: new Date()}
    const { saveEntry } = useContext(EntryContext) as EntryContextType
    const [newEntry,setNewEntry] = useState<Entry>(emptyEntry)
    const handleInputChange = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setNewEntry({
            ...newEntry,
            [event.target.name] : event.target.value
        })
    }
    const handleSend = (e: MouseEvent<HTMLButtonElement>) => {
        saveEntry(newEntry)
        setNewEntry(emptyEntry)
    }
    return(
        <section className="flex justify-center flex-col w-fit ml-auto mr-auto mt-10 gap-5 bg-gray-300 p-8 rounded-md">
            <input className="p-3 rounded-md" type="text" placeholder="Title" name="title" value={newEntry.title} onChange={handleInputChange}/>
            <textarea className="p-3 rounded-md" placeholder="Description" name="description" value={newEntry.description} onChange={handleInputChange}/>
            <p className="text-left font-medium text-md">Created By:</p>
            <input className="p-3 rounded-md" type="date" name="created_at" value={(new Date(newEntry.created_at)).toISOString().split('T')[0]} onChange={handleInputChange}/>
            <p className="text-left font-medium text-md">Scheduled:</p>
            <input className="p-3 rounded-md" type="date" name="scheduled" value={(new Date(newEntry.scheduled)).toISOString().split('T')[0]} onChange={handleInputChange}/>
            <button onClick={(e) => {handleSend(e)}} className={`${updateClass} font-semibold text-white p-3 rounded-md`}>Create</button>
        </section>
    )
}