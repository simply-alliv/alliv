import React, { FunctionComponent } from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';
import { CardVideo } from '../../components/card-video';
import { PortfolioItem } from './index';

export interface PreviewDialogProps {
  open: boolean;
  selectedPortfolio: PortfolioItem;
  onClose: () => void;
}

export const PreviewDialog: FunctionComponent<PreviewDialogProps> = (props) => {
  const { onClose, open, selectedPortfolio } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="preview-dialog-title" open={open}>
      <DialogTitle id="preview-dialog-title">{`${selectedPortfolio?.title} Preview`}</DialogTitle>
      <CardVideo srcWebm={selectedPortfolio?.srcWebm} srcMp4={selectedPortfolio?.srcMp4} />
    </Dialog>
  );
}