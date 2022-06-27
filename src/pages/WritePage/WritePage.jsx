import './WritePage.css'

export default function WritePage() {
    return (
        <div className='writePage'>
            <form className='writePageForm'>
                <div className='writePageFormGroup'>
                    <label htmlFor='fileInput'>
                        <i class="fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: "none" }} />
                    <input type='text' placeholder='Title' />
                </div>
            </form>
        </div>
    )
}
