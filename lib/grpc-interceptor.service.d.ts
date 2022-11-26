import { ExecutionContext } from '@nestjs/common';
import { RpcInterceptorService } from '@ogma/nestjs-module';
export declare class GrpcParser extends RpcInterceptorService {
    getCallPoint(context: ExecutionContext): any;
    getCallerIp(context: ExecutionContext): string;
    getProtocol(): string;
    getMethod(): string;
    setRequestId(context: ExecutionContext, requestId: string): void;
}
