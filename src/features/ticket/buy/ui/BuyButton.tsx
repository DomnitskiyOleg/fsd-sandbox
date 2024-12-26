import { Button, Typography } from '@mui/material'

export function BuyButton({ price }: { price: string }) {
    return (
        <Button
            fullWidth
            variant='contained'
            sx={{ minHeight: 60 }}
            size='small'
        >
            <Typography variant='body2'>{price}</Typography>
        </Button>
    )
}
