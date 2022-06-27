import './WritePage.css'

export default function WritePage() {
    return (
        <div className='writePage'>
            <img
                className='writePageImg'
                src='https://warfarehistorynetwork.com/wp-content/uploads/M-Soldiers-1-4CJun06.jpg'
                alt='four mercenaries men in a car'
            />
            <form className='writePageForm'>
                <div className='writePageFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className="writePageIcon fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: "none" }} />
                    <input type='text' placeholder='Title' className='writePageInput' autoFocus={true} />
                </div>
                <div className='writePageFormGroup'>
                    <textarea type="text" placeholder='Tell your story...' className='writePageInput writePageText'></textarea>
                </div>
                <button className='writePageSubmit'>Publish</button>
            </form>
        </div>
    )
}
