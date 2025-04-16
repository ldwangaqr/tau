// @generated by protoc-gen-es v1.4.0 with parameter "target=ts"
// @generated from file taucorder/v1/auth.proto (package taucorder.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Node, RepositoryId } from "./common_pb.js";

/**
 * Data Structures
 *
 * @generated from message taucorder.v1.Project
 */
export class Project extends Message<Project> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string provider = 3;
   */
  provider = "";

  /**
   * @generated from field: taucorder.v1.ProjectRepos repositories = 4;
   */
  repositories?: ProjectRepos;

  constructor(data?: PartialMessage<Project>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.Project";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "repositories", kind: "message", T: ProjectRepos },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project {
    return new Project().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJsonString(jsonString, options);
  }

  static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean {
    return proto3.util.equals(Project, a, b);
  }
}

/**
 * @generated from message taucorder.v1.ProjectRepo
 */
export class ProjectRepo extends Message<ProjectRepo> {
  /**
   * @generated from field: taucorder.v1.RepositoryId id = 1;
   */
  id?: RepositoryId;

  /**
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  /**
   * @generated from field: string deploy_key_private = 3;
   */
  deployKeyPrivate = "";

  constructor(data?: PartialMessage<ProjectRepo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.ProjectRepo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: RepositoryId },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "deploy_key_private", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectRepo {
    return new ProjectRepo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectRepo {
    return new ProjectRepo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectRepo {
    return new ProjectRepo().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectRepo | PlainMessage<ProjectRepo> | undefined, b: ProjectRepo | PlainMessage<ProjectRepo> | undefined): boolean {
    return proto3.util.equals(ProjectRepo, a, b);
  }
}

/**
 * @generated from message taucorder.v1.ProjectRepos
 */
export class ProjectRepos extends Message<ProjectRepos> {
  /**
   * @generated from field: taucorder.v1.ProjectRepo config = 1;
   */
  config?: ProjectRepo;

  /**
   * @generated from field: taucorder.v1.ProjectRepo code = 2;
   */
  code?: ProjectRepo;

  constructor(data?: PartialMessage<ProjectRepos>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.ProjectRepos";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "message", T: ProjectRepo },
    { no: 2, name: "code", kind: "message", T: ProjectRepo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectRepos {
    return new ProjectRepos().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectRepos {
    return new ProjectRepos().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectRepos {
    return new ProjectRepos().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectRepos | PlainMessage<ProjectRepos> | undefined, b: ProjectRepos | PlainMessage<ProjectRepos> | undefined): boolean {
    return proto3.util.equals(ProjectRepos, a, b);
  }
}

/**
 * @generated from message taucorder.v1.ByProjectRequest
 */
export class ByProjectRequest extends Message<ByProjectRequest> {
  /**
   * @generated from field: taucorder.v1.Node node = 1;
   */
  node?: Node;

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<ByProjectRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.ByProjectRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ByProjectRequest {
    return new ByProjectRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ByProjectRequest {
    return new ByProjectRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ByProjectRequest {
    return new ByProjectRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ByProjectRequest | PlainMessage<ByProjectRequest> | undefined, b: ByProjectRequest | PlainMessage<ByProjectRequest> | undefined): boolean {
    return proto3.util.equals(ByProjectRequest, a, b);
  }
}

/**
 * @generated from message taucorder.v1.ByRepositoryRequest
 */
export class ByRepositoryRequest extends Message<ByRepositoryRequest> {
  /**
   * @generated from field: taucorder.v1.Node node = 1;
   */
  node?: Node;

  /**
   * @generated from field: taucorder.v1.RepositoryId id = 2;
   */
  id?: RepositoryId;

  constructor(data?: PartialMessage<ByRepositoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.ByRepositoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "id", kind: "message", T: RepositoryId },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ByRepositoryRequest {
    return new ByRepositoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ByRepositoryRequest {
    return new ByRepositoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ByRepositoryRequest {
    return new ByRepositoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ByRepositoryRequest | PlainMessage<ByRepositoryRequest> | undefined, b: ByRepositoryRequest | PlainMessage<ByRepositoryRequest> | undefined): boolean {
    return proto3.util.equals(ByRepositoryRequest, a, b);
  }
}

/**
 * @generated from message taucorder.v1.ByHookRequest
 */
export class ByHookRequest extends Message<ByHookRequest> {
  /**
   * @generated from field: taucorder.v1.Node node = 1;
   */
  node?: Node;

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  constructor(data?: PartialMessage<ByHookRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.ByHookRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ByHookRequest {
    return new ByHookRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ByHookRequest {
    return new ByHookRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ByHookRequest {
    return new ByHookRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ByHookRequest | PlainMessage<ByHookRequest> | undefined, b: ByHookRequest | PlainMessage<ByHookRequest> | undefined): boolean {
    return proto3.util.equals(ByHookRequest, a, b);
  }
}

/**
 * @generated from message taucorder.v1.GithubHook
 */
export class GithubHook extends Message<GithubHook> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: int64 repository_id = 2;
   */
  repositoryId = protoInt64.zero;

  /**
   * @generated from field: string secret = 3;
   */
  secret = "";

  constructor(data?: PartialMessage<GithubHook>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.GithubHook";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GithubHook {
    return new GithubHook().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GithubHook {
    return new GithubHook().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GithubHook {
    return new GithubHook().fromJsonString(jsonString, options);
  }

  static equals(a: GithubHook | PlainMessage<GithubHook> | undefined, b: GithubHook | PlainMessage<GithubHook> | undefined): boolean {
    return proto3.util.equals(GithubHook, a, b);
  }
}

/**
 * @generated from message taucorder.v1.BitbucketHook
 */
export class BitbucketHook extends Message<BitbucketHook> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<BitbucketHook>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.BitbucketHook";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BitbucketHook {
    return new BitbucketHook().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BitbucketHook {
    return new BitbucketHook().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BitbucketHook {
    return new BitbucketHook().fromJsonString(jsonString, options);
  }

  static equals(a: BitbucketHook | PlainMessage<BitbucketHook> | undefined, b: BitbucketHook | PlainMessage<BitbucketHook> | undefined): boolean {
    return proto3.util.equals(BitbucketHook, a, b);
  }
}

/**
 * @generated from message taucorder.v1.Hook
 */
export class Hook extends Message<Hook> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from oneof taucorder.v1.Hook.provider
   */
  provider: {
    /**
     * @generated from field: taucorder.v1.GithubHook github = 2;
     */
    value: GithubHook;
    case: "github";
  } | {
    /**
     * @generated from field: taucorder.v1.BitbucketHook bitbucket = 3;
     */
    value: BitbucketHook;
    case: "bitbucket";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Hook>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.Hook";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "github", kind: "message", T: GithubHook, oneof: "provider" },
    { no: 3, name: "bitbucket", kind: "message", T: BitbucketHook, oneof: "provider" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook {
    return new Hook().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook {
    return new Hook().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook {
    return new Hook().fromJsonString(jsonString, options);
  }

  static equals(a: Hook | PlainMessage<Hook> | undefined, b: Hook | PlainMessage<Hook> | undefined): boolean {
    return proto3.util.equals(Hook, a, b);
  }
}

/**
 * @generated from message taucorder.v1.X509Certificate
 */
export class X509Certificate extends Message<X509Certificate> {
  /**
   * @generated from field: bytes data = 1;
   */
  data = new Uint8Array(0);

  /**
   * @generated from field: bool acme = 2;
   */
  acme = false;

  constructor(data?: PartialMessage<X509Certificate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.X509Certificate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "acme", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): X509Certificate {
    return new X509Certificate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): X509Certificate {
    return new X509Certificate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): X509Certificate {
    return new X509Certificate().fromJsonString(jsonString, options);
  }

  static equals(a: X509Certificate | PlainMessage<X509Certificate> | undefined, b: X509Certificate | PlainMessage<X509Certificate> | undefined): boolean {
    return proto3.util.equals(X509Certificate, a, b);
  }
}

/**
 * @generated from message taucorder.v1.X509CertificateRequest
 */
export class X509CertificateRequest extends Message<X509CertificateRequest> {
  /**
   * @generated from field: taucorder.v1.Node node = 1;
   */
  node?: Node;

  /**
   * @generated from field: string domain = 2;
   */
  domain = "";

  /**
   * @generated from field: bytes data = 3;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<X509CertificateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "taucorder.v1.X509CertificateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): X509CertificateRequest {
    return new X509CertificateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): X509CertificateRequest {
    return new X509CertificateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): X509CertificateRequest {
    return new X509CertificateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: X509CertificateRequest | PlainMessage<X509CertificateRequest> | undefined, b: X509CertificateRequest | PlainMessage<X509CertificateRequest> | undefined): boolean {
    return proto3.util.equals(X509CertificateRequest, a, b);
  }
}

