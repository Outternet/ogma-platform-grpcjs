"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcParser = void 0;
const common_1 = require("@nestjs/common");
const nestjs_module_1 = require("@ogma/nestjs-module");
let GrpcParser = class GrpcParser extends nestjs_module_1.RpcInterceptorService {
    getCallPoint(context) {
        return super.getCallPoint(context).rpc;
    }
    getCallerIp(context) {
        const data = this.getData(context);
        return (data === null || data === void 0 ? void 0 : data.ip) || '';
    }
    getProtocol() {
        return 'grpc';
    }
    getMethod() {
        return 'gRPC';
    }
    setRequestId(context, requestId) {
        const grpcContext = this.getClient(context);
        grpcContext.requestId = requestId;
    }
};
GrpcParser = __decorate([
    (0, common_1.Injectable)()
], GrpcParser);
exports.GrpcParser = GrpcParser;
