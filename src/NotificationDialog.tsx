import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function SimpleDialog() {

    const [open, setOpen] = React.useState(true)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        navigator.serviceWorker.addEventListener('message', (message) => console.log(message.data))
    },[])

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-slide-title">{"TITLE"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        CONTENT
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'}onClick={handleClose} color="primary">
                        Disagree
                    </Button>

                    <Button variant={'contained'}onClick={handleClose} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


const a = {
    "firebase-messaging-msg-type": "push-msg-received",
    "firebase-messaging-msg-data": {
        "data": {
            "gcm.n.e": "1",
            "google.c.a.ts": "1607593474",
            "google.c.a.udt": "0",
            "google.c.a.e": "1",
            "google.c.a.c_id": "6197527633312980929"
        },
        "from": "105560085884",
        "priority": "high",
        "notification": {
            "title": "test",
            "body": "test",
            "tag": "campaign_collapse_key_6197527633312980929"
        },
        "collapse_key": "campaign_collapse_key_6197527633312980929"
    }
}
