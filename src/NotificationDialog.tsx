import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function SimpleDialog() {

    const [open, setOpen] = useState(false)

    const [dialogData, setDialogData] = useState<any>(null)

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        navigator.serviceWorker.addEventListener('message', (message: any) => setDialogData(message.data))
    }, [])

    useEffect(() => {
        !!dialogData && setOpen(true)
    }, [dialogData])

    const tovisualize = {
        title: dialogData ? dialogData['firebase-messaging-msg-data']?.notification?.title : 'no-data',
        desc: dialogData ? dialogData['firebase-messaging-msg-data']?.notification?.body : 'no-data'
    }

    return (
        <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
        >
            {tovisualize && <DialogTitle id="alert-dialog-slide-title">{tovisualize.title}</DialogTitle>}
            {tovisualize && <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {tovisualize.desc}
                </DialogContentText>
            </DialogContent>}

            <DialogActions>
                <Button variant={'contained'} onClick={handleClose} color="primary">
                    Chiudi
                </Button>
            </DialogActions>
        </Dialog>
    )
}
