import { NextFunction, Request, Response } from 'express';

const newFolderServerCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'its working fine'
    });
};

export default { newFolderServerCheck };