import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box, Typography } from '@mui/material';

const RichTextEditor = ({ userData }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Box sx={{ p: 2, borderRadius: 2 ,color:'black'}}>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'link', 'history'],
          inline: { options: ['bold', 'italic', 'underline'] },
        }}
      />
      
      <Box sx={{mt: 2,border: '1px solid ' ,borderRadius: 2,maxWidth: '100%', overflow: 'auto',color:'white'}}>
        <Typography variant="h6">User Data</Typography>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' ,margin: 0}}>{JSON.stringify(userData, null, 2)}</pre>
      </Box>
    </Box>
  );
};

export default RichTextEditor;
