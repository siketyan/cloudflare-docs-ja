# Cloudflare Docs

__[View the docs →](https://developers.cloudflare.com/docs/)__

[Contribute to the docs](https://developers.cloudflare.com/docs-engine/contributing/to-cloudflare-docs)

[Set up local development](https://developers.cloudflare.com/docs-engine/contributing/development-setup)

## For Cloudflare employees

To get write access to this repo, please reach out to the __Developer Docs__ room in chat.

## Products

| Product                 | `pathPrefix`         | Test                                                                                  |
| :---------------------- | :------------------- | :------------------------------------------------------------------------------------ |
| 1.1.1.1                 | 1.1.1.1              | [Test](https://1-1-1-1.cloudflare-docs.workers.dev/1.1.1.1)                           |
| Analytics               | analytics            | [Test](https://analytics.cloudflare-docs.workers.dev/analytics)                       |
| API                     | api                  | [Test](https://api.cloudflare-docs.workers.dev/api)                                   |
| Automatic Platform Optimization | automatic-platform-optimization | [Test](https://automatic-platform-optimization.cloudflare-docs.workers.dev/automatic-platform-optimization) |
| Bots                    | bots                 | [Test](https://bots.cloudflare-docs.workers.dev/bots)                                 |
| BYOIP                   | byoip                | [Test](https://byoip.cloudflare-docs.workers.dev/byoip)                               |
| Cache                   | cache                | [Test](https://cache.cloudflare-docs.workers.dev/cache/)                               |
| Cloudflare One          | cloudflare-one       | [Test](https://cloudflare-one.cloudflare-docs.workers.dev/cloudflare-one)             |
| DDoS Protection         | ddos-protection      | [Test](https://ddos-protection.cloudflare-docs.workers.dev/ddos-protection)           |
| Distributed Web Gateway | distributed-web      | [Test](https://distributed-web.cloudflare-docs.workers.dev/distributed-web)           |
| Docs Engine             | docs-engine          | [Test](https://docs-engine.cloudflare-docs.workers.dev/docs-engine)                   |
| Email Routing           | email-routing        | [Test](https://email-routing.cloudflare-docs.workers.dev/email-routing)               |
| Events                  | events               | [Test](https://events.cloudflare-docs.workers.dev/events)                             |
| Firewall                | firewall             | [Test](https://firewall.cloudflare-docs.workers.dev/firewall)                         |
| Fundamentals            | fundamentals         | [Test](https://fundamentals.cloudflare-docs.workers.dev/fundamentals)                 |
| HTTP/3                  | http3                | [Test](https://http3.cloudflare-docs.workers.dev/http3)                               |
| Image Optimization      | images               | [Test](https://images.cloudflare-docs.workers.dev/images)                             |
| Load Balancing          | load-balancing       | [Test](https://load-balancing.cloudflare-docs.workers.dev/load-balancing)             |
| Logs                    | logs                 | [Test](https://logs.cloudflare-docs.workers.dev/logs)                                 |
| Magic Firewall          | magic-firewall        | [Test](https://magic-firewall.cloudflare-docs.workers.dev/magic-firewall)            |
| Magic Transit           | magic-transit        | [Test](https://magic-transit.cloudflare-docs.workers.dev/magic-transit)               |
| Network Interconnect    | network-interconnect | [Test](https://network-interconnect.cloudflare-docs.workers.dev/network-interconnect) |
| Pages                   | pages                | [Test](https://pages.cloudflare-docs.workers.dev/pages)                               |
| Railgun                 | railgun              | [Test](https://railgun.cloudflare-docs.workers.dev/railgun)                           |
| Randomness Beacon       | randomness-beacon    | [Test](https://randomness-beacon.cloudflare-docs.workers.dev/randomness-beacon)       |
| Registrar               | registrar            | [Test](https://registrar.cloudflare-docs.workers.dev/registrar)                       |
| Rules                   | rules                | [Test](https://rules.cloudflare-docs.workers.dev/rules)                               |
| Ruleset Engine          | ruleset-engine       | [Test](https://ruleset-engine.cloudflare-docs.workers.dev/ruleset-engine)             |
| Security Center         | security-center      | [Test](https://security-center.cloudflare-docs.workers.dev/security-center)           |
| Spectrum                | spectrum             | [Test](https://spectrum.cloudflare-docs.workers.dev/spectrum)                         |
| SSL                     | ssl                  | [Test](https://ssl.cloudflare-docs.workers.dev/ssl)                                   |
| Stream                  | stream               | [Test](https://stream.cloudflare-docs.workers.dev/stream)                             |
| Tenant                  | tenant               | [Test](https://tenant.cloudflare-docs.workers.dev/tenant)                             |
| Terraform               | terraform            | [Test](https://terraform.cloudflare-docs.workers.dev/terraform)                       |
| Time Services           | time-services        | [Test](https://time-services.cloudflare-docs.workers.dev/time-services)               |
| WAF                     | waf                  | [Test](https://waf.cloudflare-docs.workers.dev/waf)                                   |
| WARP Client             | warp-client          | [Test](https://warp-client.cloudflare-docs.workers.dev/warp-client)                   |
| Workers                 | workers              | [Test](https://workers.cloudflare-docs.workers.dev/workers)                           |
| Zaraz                   | zaraz                | [Test](https://zaraz.cloudflare-docs.workers.dev/zaraz)                               |

### Deployment

Each [product](https://github.com/cloudflare/cloudflare-docs/tree/production/products)’s docs are automatically deployed via [@cloudflare/wrangler](https://github.com/cloudflare/wrangler) using GitHub Actions to both testing and production environments:

```txt
TEST: https://$pathPrefix.cloudflare-docs.workers.dev/$pathPrefix/
PROD: https://developers.cloudflare.com/$pathPrefix/
```
### License and Legal Notices

Except as otherwise noted, Cloudflare and any contributors grant you a license to the Cloudflare Developer Documentation and other content in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode), see the [LICENSE file](https://github.com/cloudflare/cloudflare-docs/blob/production/LICENSE), and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the [LICENSE-CODE file](https://github.com/cloudflare/cloudflare-docs/blob/production/LICENSE-CODE).

Cloudflare products and services referenced in the documentation may be either trademarks or registered trademarks of Cloudflare in the United States and/or other countries. The licenses for this project do not grant you rights to use any Cloudflare names, logos, or trademarks. Cloudflare's general trademark guidelines can be found at [https://www.cloudflare.com/trademark/](https://www.cloudflare.com/trademark/).
Cloudflare and any contributors reserve all other rights, whether under their respective copyrights, patents, or trademarks, whether by implication, estoppel, or otherwise.
