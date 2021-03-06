import React from 'react';
import MDToolButton from './MDToolButton';
import { insertQuote } from '../ace/ace-controller';

function QuoteTrigger({
  ace,
}) {

  return (
    <MDToolButton
      icon="format_quote"
      popup="Insert a Quote"
      onClick={() => insertQuote(ace)}
    />
  );
}

export default QuoteTrigger;
