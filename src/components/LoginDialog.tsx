'use client'

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { LogInIcon } from "lucide-react";

const LoginDialog = () => {

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="rounded" size="sm">
                        Entrar
                        <LogInIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    
                </DialogContent>
            </Dialog>
        </>
    );
}

export default LoginDialog;

