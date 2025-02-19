---
id: camunda-api-rest-overview
title: "Overview"
description: "Interact with Camunda 8 clusters. Activate jobs and run user task state operations for Zeebe user tasks."
---

The Camunda 8 REST API is a REST API designed to interact with a Camunda 8 cluster.

:::note
Ensure you [authenticate](./camunda-api-rest-authentication.md) before accessing the Camunda 8 REST API.
:::

## Context paths

For SaaS: `https://${REGION}.zeebe.camunda.io:443/${CLUSTER_ID}/v2/`, and for Self-Managed installations: `http://localhost:8080/v2/`.

:::note
Find your region and cluster id under **Connection information** in your client credentials (revealed when you click on your client under the **API** tab within your cluster).

For Self-Managed, the host and port depend on your configuration. The context path mentioned here is the default for the Zeebe component.
:::

## API Explorer

See [the interactive Camunda 8 REST API Explorer][camunda-api-explorer] for specifications, example requests and responses, and code samples of interacting with the Camunda 8 REST API.

### Query API

:::warning
Query API endpoints do not currently support [resource authorizations][resource authorizations], and can be used to expand user access to restricted resources. If you use resource permissions, allowing public access to those endpoints is not recommended.
:::

All Query API endpoints contain an `(experimental)` declaration. Those endpoints are not accessible by default in Camunda 8 clusters.

You can enable the experimental search endpoints by setting either the configuration property `camunda.rest.query.enabled` to `true`,
or the environment variable `CAMUNDA_REST_QUERY_ENABLED` to `true`.

[camunda-api-explorer]: ./specifications/camunda-8-rest-api.info.mdx
[resource authorizations]: /self-managed/concepts/access-control/resource-authorizations.md
