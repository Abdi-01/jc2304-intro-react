import React, { useRef, useState } from 'react';
import {
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
} from '@chakra-ui/react';

function ProfilePage() {
    const inputRef = useRef(null);

    const [username, setUsername]=React.useState('');

    const btnGetValue = () => {
        console.log(inputRef);
        alert(username); // untuk username
        alert(inputRef.current.value); // untuk nampilin email
    }

    const handleInput=(element)=>{
        console.log(element)
        setUsername(element.target.value)
    }

    return <Container>
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" onChange={handleInput} />
        </FormControl>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="text" ref={inputRef} />
        </FormControl>
        <Button type='button' variant="outline"
            onClick={btnGetValue}
            colorScheme="whatsapp">
            Get Value
        </Button>
    </Container>
}

export default ProfilePage;