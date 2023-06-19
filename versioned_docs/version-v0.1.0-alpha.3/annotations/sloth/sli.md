---
sidebar_position: 3
---

# SLI Annotations

Defines the SLI being used by an SLO.

```go
// @sloth.sli error_query sum(rate(tenant_failed_login_operations_total{client="chat-gpt"}[{{.window}}])) OR on() vector(0)
// @sloth.sli total_query sum(rate(tenant_login_operations_total{client="chat-gpt"}[{{.window}}]))
```

Running **slotalk** with the above annotations will generate the following sloth specification:

```yaml
version: prometheus/v1
service: ...
labels: ...
slos:
  - name: ...
    description: ...
    objective: 
    sli:
      events:
        error_query: sum(rate(tenant_failed_login_operations_total{client="chat-gpt"}[{{.window}}])) OR on() vector(0)
        total_query: sum(rate(tenant_login_operations_total{client="chat-gpt"}[{{.window}}]))
```

:::caution Caution

The SLI must be defined in the same comment group as where the was defined SLO.

```go
// @sloth.slo name chat-gpt-availability
// @sloth.slo objective 95.0
// @sloth.sli error_query sum(rate(tenant_failed_login_operations_total{client="chat-gpt"}[{{.window}}])) OR on() vector(0)
// @sloth.sli total_query sum(rate(tenant_login_operations_total{client="chat-gpt"}[{{.window}}]))
// @sloth.slo description 95% of logins to the chat-gpt app should be successful.
```

:::

## Table of Annotations
| Annotation        | Description                                                                                                                                                                                                        | Example                                                                                                |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| error_query       | ErrorQuery is a Prometheus query that will get the number/count of events that we consider that are bad for the SLO (e.g "http 5xx", "latency > 250ms"...). Requires the usage of `{{.window}}` template variable. | @sloth.sli error_query sum(rate(tenant_failed_login_operations_total{client="chat-gpt"}[{{.window}}])) |
| total_query       | TotalQuery is a Prometheus query that will get the total number/count of events for the SLO (e.g "all http requests"...). Requires the usage of `{{.window}}` template variable.                                   | @sloth.sli total_query sum(rate(tenant_login_operations_total{client="chat-gpt"}[{{.window}}]))        |
| error_ratio_query | ErrorRatioQuery is a Prometheus query that will get the raw error ratio (0-1) for the SLO                                                                                                                          | @sloth.sli error_ratio_query                                                                           |

:::tip Note

error_ratio_query cannot be present in the same SLI definition if error_query and total_query are also present.

:::
