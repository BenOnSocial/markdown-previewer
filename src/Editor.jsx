import { useSelector, useDispatch } from 'react-redux';
import { update } from './editorSlice';

export default function Editor() {
  const markdown = useSelector((state) => state.editor.markdown);
  const preview = useSelector((state) => state.editor.preview);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch(update(event.target.value));
    document.getElementById('preview').innerHTML = preview;
  };

  return (
    <div className="vstack gap-1 h-100">
      <h5 className="text-center p-2 text-bg-primary">Makrdown Editor</h5>
      <textarea
        id="editor"
        type="textarea"
        className="form-control h-50"
        onChange={handleChange}
        placeholder="Enter markdown here."
      ></textarea>
      <h5 className="text-center p-2 text-bg-primary">Preview</h5>
      <div id="preview" className="h-50 p-3"></div>
    </div>
  );
}
