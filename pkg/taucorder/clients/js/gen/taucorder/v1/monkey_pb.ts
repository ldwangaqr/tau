// @generated by protoc-gen-es v1.4.0 with parameter "target=ts"
// @generated from file taucorder/v1/monkey.proto (package taucorder.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Node } from "./common_pb.js";

/**
 * Data Structures
 *
 * @generated from message taucorder.v1.GetJobInstanceRequest
 */
export class GetJobInstanceRequest extends Message<GetJobInstanceRequest> {
  /**
   * @generated from field: taucorder.v1.Node node = 1;
   */
  node?: Node;

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<GetJobInstanceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.GetJobInstanceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetJobInstanceRequest {
    return new GetJobInstanceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetJobInstanceRequest {
    return new GetJobInstanceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetJobInstanceRequest {
    return new GetJobInstanceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetJobInstanceRequest | PlainMessage<GetJobInstanceRequest> | undefined, b: GetJobInstanceRequest | PlainMessage<GetJobInstanceRequest> | undefined): boolean {
    return proto3.util.equals(GetJobInstanceRequest, a, b);
  }
}

