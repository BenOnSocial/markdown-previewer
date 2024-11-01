import { createSlice } from '@reduxjs/toolkit';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

marked.use({
  async: false,
  breaks: true,
  gfm: true,
});

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    markdown: '',
    preview: '',
  },
  reducers: {
    update: (state, action) => {
      state.markdown = action.payload;
      state.preview = DOMPurify.sanitize(marked.parse(action.payload));
    },
  },
});

export const { update } = editorSlice.actions;
export default editorSlice.reducer;
