(this.webpackJsonp = this.webpackJsonp || []).push([
	[0],
	{
		383: function (e, t) {},
		479: function (e) {
			e.exports = JSON.parse(
				'{"strict":{"text-font-family":"OpenSans_400Regular","text-heading-1-font-size":36,"text-heading-1-font-weight":"800","text-heading-1-font-family":"OpenSans_700Bold","text-subtitle-1-font-size":15,"text-subtitle-1-font-weight":"600","text-subtitle-1-font-family":"OpenSans_600SemiBold","text-paragraph-1-font-size":15,"text-paragraph-1-font-weight":"400","text-paragraph-1-font-family":"OpenSans_400Regular","text-caption-1-font-size":12,"text-caption-1-font-weight":"400","text-caption-1-font-family":"OpenSans_400Regular","text-label-font-size":12,"text-label-font-weight":"800","text-label-font-family":"OpenSans_700Bold"}}'
			);
		},
		483: function (e, t, a) {
			"use strict";
			a.d(t, "a", function () {
				return Ye;
			});
			var n = a(6),
				r = a.n(n),
				l = a(58),
				c = a.n(l),
				o = (a(1418), a(484)),
				i = a(0),
				s = a.n(i),
				u = a(1431),
				m = a(17),
				d = a(2),
				p = a(16),
				g = a.n(p),
				y = a(13),
				b = a.n(y),
				f = a(1429),
				E = a(1430),
				h = a(253),
				x = a(79),
				v = a(486),
				w = a(48),
				j = a(251);
			function O(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(
								e,
								t
							).enumerable;
						})),
						a.push.apply(a, n);
				}
				return a;
			}
			function T(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2
						? O(Object(a), !0).forEach(function (t) {
								r()(e, t, a[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(a)
						  )
						: O(Object(a)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(a, t)
								);
						  });
				}
				return e;
			}
			var S = a(530),
				k = s.a.createContext({
					settings: {},
					currencies: [],
					currency: null,
					loadingCurrencies: !0,
					loadingSettings: !0,
					setCurrency: function (e) {},
					buyCrypto: function () {
						return { status: !1 };
					},
					sellCrypto: function () {
						return { status: !1 };
					},
					resolveAccount: function () {
						return { status: !1 };
					},
					searchOrder: function () {
						return { status: !1 };
					},
					order: null,
					loadingAccountResolve: !1,
					loadingBuyRequest: !1,
					loadingGetOrder: !1,
					loadingSellRequest: !1,
				}),
				C = v.a.load(),
				P = "koinstrap.com",
				B = Object(x.createClient)({
					requestInterceptors: [
						function (e) {
							return function (e) {
								var t, a;
								return b.a.async(
									function (n) {
										for (;;)
											switch ((n.prev = n.next)) {
												case 0:
													return (
														(n.next = 2),
														b.a.awrap(C)
													);
												case 2:
													return (
														(t = n.sent),
														(n.next = 5),
														b.a.awrap(t.get())
													);
												case 5:
													return (
														(a = n.sent),
														n.abrupt(
															"return",
															T(
																T({}, e),
																{},
																{
																	endpoint:
																		"https://" +
																		P +
																		"/api/v" +
																		e.endpoint,
																	headers: {
																		Accept: "application/json",
																		"Content-Type":
																			"application/json",
																		"Vendor-Host":
																			location.hostname,
																		"Vendor-Visitor":
																			a.visitorId,
																	},
																}
															)
														)
													);
												case 7:
												case "end":
													return n.stop();
											}
									},
									null,
									null,
									null,
									Promise
								);
							};
						},
					],
					responseInterceptors: [],
				}),
				z = { method: "GET", endpoint: "/settings" },
				R = { method: "GET", endpoint: "/currencies" },
				I = function (e) {
					return { method: "POST", endpoint: "/buy", body: e };
				},
				N = function (e) {
					return { method: "POST", endpoint: "/sell", body: e };
				},
				D = function (e) {
					return {
						method: "POST",
						endpoint: "/resolve-account",
						body: e,
					};
				},
				A = function (e) {
					return { method: "GET", endpoint: "/orders/" + e };
				};
			function H(e) {
				var t = e.children,
					a = Object(i.useState)({}),
					n = g()(a, 2),
					r = n[0],
					l = n[1],
					c = Object(i.useState)([]),
					o = g()(c, 2),
					u = o[0],
					m = o[1],
					d = Object(i.useState)(null),
					p = g()(d, 2),
					y = p[0],
					f = p[1],
					E = Object(i.useState)(null),
					h = g()(E, 2),
					v = h[0],
					O = h[1],
					T = Object(w.c)(),
					C = Object(x.useQuery)(z, !0),
					B = C.loading,
					H = C.payload,
					_ = C.error,
					F = Object(x.useQuery)(R, !0),
					V = F.loading,
					W = F.payload,
					q = Object(x.useMutation)(I),
					L = q.loading,
					K = q.mutate,
					G = Object(x.useMutation)(N),
					U = G.loading,
					M = G.mutate,
					Y = Object(x.useMutation)(D),
					Q = Y.loading,
					J = Y.mutate,
					X = Object(x.useParameterizedQuery)(A),
					Z = X.loading,
					$ = X.query;
				Object(i.useEffect)(
					function () {
						null != H && H.name && l(H);
					},
					[H]
				),
					Object(i.useEffect)(
						function () {
							(null == W ? void 0 : W.length) >= 1 && m(W);
						},
						[W]
					),
					Object(i.useEffect)(
						function () {
							_ &&
								"vendor not found" ==
									(null == H ? void 0 : H.message) &&
								(window.location = "https://" + P + "/ks/app");
						},
						[_]
					);
				return s.a.createElement(
					k.Provider,
					{
						value: {
							settings: r,
							currencies: u,
							currency: y,
							setCurrency: f,
							loadingSettings: B,
							loadingCurrencies: V,
							buyCrypto: function (e) {
								var t, a, n, r, l, c, o, i, s, u, m, d;
								return b.a.async(
									function (p) {
										for (;;)
											switch ((p.prev = p.next)) {
												case 0:
													if (
														((t = e.amount),
														(a = e.address),
														(n = e.bank),
														(r = e.accountNumber),
														(l = e.isFiat),
														(c = e.cryptoAmount),
														(o = e.memoTag),
														(i = e.phoneNumber),
														(s = e.network),
														S.validate(
															a,
															y.currency
														))
													) {
														p.next = 3;
														break;
													}
													return p.abrupt(
														"return",
														T.error(
															"Please enter a valid " +
																y.display_name +
																" address"
														)
													);
												case 3:
													if (
														!(u = new j(
															{
																amount: t,
																address: a,
																bank: n,
																accountNumber:
																	r,
																isFiat: l,
																memoTag: o,
																phoneNumber: i,
																network: s,
															},
															{
																amount: "required|numeric|min:1000",
																address:
																	"required|alpha_num",
																bank: "required",
																accountNumber:
																	"required|min:10|max:10",
																phoneNumber:
																	"required|min:11|max:11",
																memoTag:
																	"min:1|max:25",
																network:
																	"required",
															},
															{
																"required.amount":
																	"Kindly enter a valid amount",
																"min.amount":
																	"Kindly enter an amount above NGN 1000",
																"required.address":
																	"Kindly enter a valid address",
																"alpha_num.address":
																	"Kindly enter a valid address",
																"required.bank":
																	"Kindly select a valid bank",
																"required.accountNumber":
																	"Kindly enter a valid account number",
																"min.accountNumber":
																	"Account account number must be 10 numbers",
																"max.accountNumber":
																	"Account account number must be 10 numbers",
																"required.phoneNumber":
																	"Please enter a valid phone number",
																"min.phoneNumber":
																	"Phone number must be 11 numbers",
																"max.phoneNumber":
																	"Phone number must be 11 numbers",
																"required.network":
																	"Kindly enter a valid network",
															}
														)).fails()
													) {
														p.next = 7;
														break;
													}
													return (
														T.error(
															u.errors.first(
																Object.keys(
																	u.errors.all()
																)[0]
															)
														),
														p.abrupt("return", {
															status: !1,
														})
													);
												case 7:
													return (
														(p.next = 9),
														b.a.awrap(
															K({
																amount: c,
																address: a,
																bank: n,
																account_number:
																	r,
																is_fiat: l,
																currency:
																	y.currency,
																memoTag: o,
																phone_number: i,
																network: s,
															})
														)
													);
												case 9:
													if (
														((m = p.sent),
														null ==
															(d = m.payload) ||
															!d.reference)
													) {
														p.next = 14;
														break;
													}
													return (
														O(d),
														p.abrupt("return", {
															status: !0,
														})
													);
												case 14:
													return (
														d.errors &&
															T.error(
																d.errors[
																	Object.keys(
																		d.errors
																	)[0]
																][0]
															),
														"Vendor cannont receive payments" ==
															d.message &&
															T.error(
																"Can't receive payments, kindly contact support."
															),
														p.abrupt("return", {
															status: !1,
														})
													);
												case 17:
												case "end":
													return p.stop();
											}
									},
									null,
									null,
									null,
									Promise
								);
							},
							sellCrypto: function (e) {
								var t, a, n, r, l, c, o, i, s, u;
								return b.a.async(
									function (m) {
										for (;;)
											switch ((m.prev = m.next)) {
												case 0:
													if (
														((t = e.amount),
														(a = e.bank),
														(n = e.accountNumber),
														(r = e.isFiat),
														(l = e.cryptoAmount),
														(c = e.phoneNumber),
														(o = e.network),
														!(i = new j(
															{
																amount: t,
																bank: a,
																accountNumber:
																	n,
																isFiat: r,
																phoneNumber: c,
																network: o,
															},
															{
																amount: "required|numeric|min:1000",
																bank: "required",
																accountNumber:
																	"required|min:10|max:10",
																phoneNumber:
																	"min:11|max:11",
																network:
																	"required",
															},
															{
																"required.amount":
																	"Please enter a valid amount",
																"min.amount":
																	"Please enter an amount above NGN 1000",
																"required.bank":
																	"Please select a valid bank",
																"required.accountNumber":
																	"Please enter a valid account number",
																"min.accountNumber":
																	"Account account number must be 10 numbers",
																"max.accountNumber":
																	"Account account number must be 10 numbers",
																"required.phoneNumber":
																	"Please enter a valid phone number",
																"min.phoneNumber":
																	"Phone number must be 11 numbers",
																"max.phoneNumber":
																	"Phone number must be 11 numbers",
																"required.network":
																	"Kindly enter a valid network",
															}
														)).fails())
													) {
														m.next = 5;
														break;
													}
													return (
														T.error(
															i.errors.first(
																Object.keys(
																	i.errors.all()
																)[0]
															)
														),
														m.abrupt("return", {
															status: !1,
														})
													);
												case 5:
													return (
														(m.next = 7),
														b.a.awrap(
															M({
																amount: l,
																bank: a,
																account_number:
																	n,
																is_fiat: r,
																currency:
																	y.currency,
																phone_number: c,
																network: o,
															})
														)
													);
												case 7:
													if (
														((s = m.sent),
														null ==
															(u = s.payload) ||
															!u.reference)
													) {
														m.next = 12;
														break;
													}
													return (
														O(u),
														m.abrupt("return", {
															status: !0,
														})
													);
												case 12:
													return (
														u.errors &&
															T.error(
																u.errors[
																	Object.keys(
																		u.errors
																	)[0]
																][0]
															),
														m.abrupt("return", {
															status: !1,
														})
													);
												case 14:
												case "end":
													return m.stop();
											}
									},
									null,
									null,
									null,
									Promise
								);
							},
							resolveAccount: function (e) {
								var t, a, n, r;
								return b.a.async(
									function (l) {
										for (;;)
											switch ((l.prev = l.next)) {
												case 0:
													return (
														(t = e.bank),
														(a = e.accountNumber),
														(l.next = 3),
														b.a.awrap(
															J({
																bank: t,
																account_number:
																	a,
															})
														)
													);
												case 3:
													if (
														((n = l.sent),
														(r = n.payload))
													) {
														l.next = 7;
														break;
													}
													return l.abrupt("return", {
														name: "",
														status: !1,
													});
												case 7:
													if (r.status) {
														l.next = 9;
														break;
													}
													return l.abrupt("return", {
														name: "",
														status: !1,
													});
												case 9:
													return l.abrupt("return", {
														name: r.data
															.account_name,
														status: !0,
													});
												case 10:
												case "end":
													return l.stop();
											}
									},
									null,
									null,
									null,
									Promise
								);
							},
							searchOrder: function (e) {
								var t, a;
								return b.a.async(
									function (n) {
										for (;;)
											switch ((n.prev = n.next)) {
												case 0:
													return (
														(n.next = 2),
														b.a.awrap($(e))
													);
												case 2:
													if (
														((t = n.sent),
														(a = t.payload))
													) {
														n.next = 6;
														break;
													}
													return n.abrupt("return", {
														status: !1,
													});
												case 6:
													if (a.reference) {
														n.next = 8;
														break;
													}
													return n.abrupt("return", {
														status: !1,
													});
												case 8:
													if (
														null == a ||
														!a.reference
													) {
														n.next = 11;
														break;
													}
													return (
														O(a),
														n.abrupt("return", {
															status: !0,
														})
													);
												case 11:
													return n.abrupt("return", {
														status: !0,
													});
												case 12:
												case "end":
													return n.stop();
											}
									},
									null,
									null,
									null,
									Promise
								);
							},
							loadingAccountResolve: Q,
							order: v,
							loadingBuyRequest: L,
							loadingSellRequest: U,
							loadingGetOrder: Z,
						},
					},
					t
				);
			}
			function _(e) {
				var t = e.children;
				return s.a.createElement(
					x.ClientContextProvider,
					{ client: B },
					s.a.createElement(H, null, t)
				);
			}
			var F = a(152);
			function V(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(
								e,
								t
							).enumerable;
						})),
						a.push.apply(a, n);
				}
				return a;
			}
			function W(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2
						? V(Object(a), !0).forEach(function (t) {
								r()(e, t, a[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(a)
						  )
						: V(Object(a)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(a, t)
								);
						  });
				}
				return e;
			}
			function q() {
				var e = Object(F.d)({
						OpenSans_400Regular: F.a,
						OpenSans_600SemiBold: F.b,
						OpenSans_700Bold: F.c,
					}),
					t = g()(e, 1)[0],
					n = i.useState(!1),
					r = g()(n, 2),
					l = r[0],
					c = r[1],
					o = i.useContext(k),
					s = o.loadingCurrencies,
					u = o.loadingSettings;
				o.settings;
				return (
					i.useEffect(function () {
						b.a.async(
							function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.prev = 0),
												h.b(),
												(e.next = 4),
												b.a.awrap(
													E.b(
														W(
															W({}, f.a.font),
															{},
															{
																"space-mono":
																	a(757),
															}
														)
													)
												)
											);
										case 4:
											e.next = 9;
											break;
										case 6:
											(e.prev = 6),
												(e.t0 = e.catch(0)),
												console.warn(e.t0);
										case 9:
											return (
												(e.prev = 9),
												c(!0),
												h.a(),
												e.finish(9)
											);
										case 13:
										case "end":
											return e.stop();
									}
							},
							null,
							null,
							[[0, 6, 9, 13]],
							Promise
						);
					}, []),
					l && !s && !u && t
				);
			}
			var L = a(171);
			var K = a(445),
				G = a(1428),
				U = a(30),
				M = a(43),
				Y = a(4),
				Q = a(97),
				J = a(40),
				X = a(12),
				Z = (a(840), a(472));
			function $() {
				return Object(Z.useMediaQuery)({ maxDeviceWidth: 992 });
			}
			function ee(e) {
				var t = e.children,
					a = $(),
					n = Object(J.useNavigation)();
				return s.a.createElement(
					d.a,
					{ style: { flex: 1 } },
					s.a.createElement(U.a, {
						style: { flex: 1, backgroundColor: "transparent" },
						onPress: function () {
							return n.goBack();
						},
					}),
					s.a.createElement(
						d.a,
						{
							style: [
								te.container,
								a && {
									width: "100%",
									height: "100%",
									top: 0,
									bottom: 0,
									right: 0,
									left: 0,
									position: "absolute",
									backgroundColor: "#fff",
								},
							],
						},
						t
					)
				);
			}
			var te = X.a.create({
				container: {
					width: 600,
					top: 0,
					bottom: 0,
					right: 0,
					position: "absolute",
					backgroundColor: "#fff",
				},
			});
			function ae(e) {
				var t,
					a,
					n,
					r,
					l = e.navigation,
					c = Object(Y.useTheme)(),
					o = $(),
					u = Object(w.c)(),
					m = Object(i.useContext)(k),
					p = m.currency,
					y = m.buyCrypto,
					f = m.settings,
					E = m.resolveAccount,
					h = m.loadingAccountResolve,
					x = m.loadingBuyRequest,
					v = Object(i.useState)(!0),
					j = g()(v, 2),
					O = j[0],
					T = j[1],
					S = Object(i.useState)("0.00"),
					C = g()(S, 2),
					P = C[0],
					B = C[1],
					z = Object(i.useState)("0.00"),
					R = g()(z, 2),
					I = R[0],
					N = R[1],
					D = Object(i.useState)(""),
					A = g()(D, 2),
					H = A[0],
					_ = A[1],
					F = Object(i.useState)(""),
					V = g()(F, 2),
					W = V[0],
					q = V[1],
					L = Object(i.useState)(""),
					K = g()(L, 2),
					G = K[0],
					J = K[1],
					X = Object(i.useState)(""),
					Z = g()(X, 2),
					te = Z[0],
					ae = Z[1],
					ne = Object(i.useState)(),
					re = g()(ne, 2),
					le = re[0],
					ce = re[1],
					oe = Object(i.useState)(""),
					ie = g()(oe, 2),
					se = ie[0],
					ue = ie[1],
					me = Object(i.useState)(""),
					de = g()(me, 2),
					pe = de[0],
					ge = de[1],
					ye = Object(i.useState)(
						p.networks.length >= 2 ? "" : p.networks[0]
					),
					be = g()(ye, 2),
					fe = be[0],
					Ee = be[1];
				Object(i.useEffect)(
					function () {
						O && N(P / p.fiat_sell_price),
							O || B(I * p.fiat_sell_price);
					},
					[O, P, I]
				);
				return (
					Object(i.useEffect)(
						function () {
							se.length >= 10
								? (function () {
										var e, t;
										b.a.async(
											function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(a.next = 2),
																b.a.awrap(
																	E({
																		bank: te,
																		accountNumber:
																			se,
																	})
																)
															);
														case 2:
															(e = a.sent),
																(t = e.name),
																e.status &&
																	ge(t);
														case 6:
														case "end":
															return a.stop();
													}
											},
											null,
											null,
											null,
											Promise
										);
								  })()
								: ge("");
						},
						[te, se]
					),
					Object(i.useEffect)(
						function () {
							ge("");
						},
						[te]
					),
					Object(i.useEffect)(
						function () {
							le && ae(f.banks[le.row].code);
						},
						[le]
					),
					s.a.createElement(
						ee,
						null,
						s.a.createElement(
							M.a,
							{
								style: { flex: 1 },
								contentContainerStyle: { paddingBottom: 50 },
							},
							s.a.createElement(
								d.a,
								{
									style: {
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										paddingVertical: 15,
										paddingHorizontal: 15,
									},
								},
								s.a.createElement(
									Y.Text,
									{ category: "h6" },
									"What do you want to do?"
								),
								!x &&
									s.a.createElement(
										U.a,
										{
											activeOpacity: 0.8,
											onPress: function () {
												return l.goBack();
											},
										},
										s.a.createElement(Y.Icon, {
											name: "close-circle-outline",
											height: 30,
											width: 30,
											fill: c["color-basic-700"],
										})
									)
							),
							s.a.createElement(
								d.a,
								{
									style: {
										flexDirection: "row",
										paddingHorizontal: 15,
										marginBottom: 20,
									},
								},
								s.a.createElement(
									d.a,
									{ style: { width: o ? 125 : 175 } },
									s.a.createElement(
										Y.Button,
										{
											style: { borderRadius: 400 },
											size: o ? "medium" : "giant",
										},
										"BUY ",
										p.currency
									)
								),
								s.a.createElement(d.a, {
									style: { width: 25 },
								}),
								s.a.createElement(
									d.a,
									{ style: { width: o ? 125 : 175 } },
									s.a.createElement(
										Y.Button,
										{
											style: {
												backgroundColor: "transparent",
												borderRadius: 400,
											},
											size: o ? "medium" : "giant",
											appearance: "outline",
											onPress: function () {
												return l.replace("Sell");
											},
										},
										"SELL ",
										p.currency
									)
								)
							),
							s.a.createElement(Y.Divider, null),
							s.a.createElement(
								d.a,
								{
									style: {
										paddingHorizontal: 15,
										marginTop: 20,
									},
								},
								s.a.createElement(
									d.a,
									{ style: { marginBottom: 5 } },
									s.a.createElement(
										Y.Text,
										{ category: "s1" },
										"How much do you want to buy?"
									)
								),
								s.a.createElement(
									d.a,
									null,
									s.a.createElement(Y.Input, {
										style: {
											borderWidth: 1,
											borderColor: c["color-primary-600"],
											borderRadius: 5,
										},
										value: O ? P : I,
										onChangeText: function (e) {
											O && B(e), O || N(e);
										},
										keyboardType: "decimal-pad",
										accessoryRight: function () {
											return O
												? s.a.createElement(
														s.a.Fragment,
														null
												  )
												: s.a.createElement(
														Y.Text,
														{
															status: "primary",
															category: "label",
														},
														p.currency
												  );
										},
										accessoryLeft: function () {
											return O
												? s.a.createElement(
														Y.Text,
														{
															status: "primary",
															category: "label",
														},
														"NGN"
												  )
												: s.a.createElement(
														s.a.Fragment,
														null
												  );
										},
										size: "large",
										placeholder: "Enter amount",
									})
								),
								s.a.createElement(
									d.a,
									{
										style: {
											marginTop: 5,
											flexDirection: "row",
											justifyContent: "space-between",
										},
									},
									s.a.createElement(
										Y.Text,
										{ category: "s2" },
										"~",
										" ",
										O
											? Number(I).toFixed(8) +
													" " +
													p.currency
											: "NGN " + P.toLocaleString()
									),
									s.a.createElement(
										U.a,
										{
											onPress: function () {
												return T(!O);
											},
										},
										s.a.createElement(
											d.a,
											{
												style: {
													flexDirection: "row",
													alignItems: "center",
													justifyContent: "center",
												},
											},
											s.a.createElement(
												d.a,
												{ style: { marginRight: 2 } },
												s.a.createElement(
													Y.Text,
													{
														category: "label",
														status: "danger",
													},
													O ? "By Crypto" : "By Cash"
												)
											),
											s.a.createElement(Y.Icon, {
												name: "swap-outline",
												width: 15,
												height: 15,
												fill: c["color-danger-600"],
											})
										)
									)
								)
							),
							s.a.createElement(
								d.a,
								{
									style: {
										paddingHorizontal: 15,
										marginTop: 20,
										marginBottom: 35,
									},
								},
								s.a.createElement(
									d.a,
									{ style: { marginBottom: 5 } },
									s.a.createElement(
										Y.Text,
										{ category: "s1" },
										"Receiving Address"
									)
								),
								s.a.createElement(
									d.a,
									null,
									s.a.createElement(Y.Input, {
										value: W,
										onChangeText: function (e) {
											return q(e);
										},
										style: {
											borderWidth: 1,
											borderColor: c["color-primary-600"],
											borderRadius: 5,
										},
										accessoryRight: function () {
											return s.a.createElement(
												Y.Button,
												{
													size: "tiny",
													onPress: function () {
														var e;
														return b.a.async(
															function (t) {
																for (;;)
																	switch (
																		(t.prev =
																			t.next)
																	) {
																		case 0:
																			return (
																				(t.prev = 0),
																				(t.next = 3),
																				b.a.awrap(
																					Q.a.getStringAsync()
																				)
																			);
																		case 3:
																			(e =
																				t.sent),
																				q(
																					e
																				),
																				(t.next = 10);
																			break;
																		case 7:
																			(t.prev = 7),
																				(t.t0 =
																					t.catch(
																						0
																					)),
																				u.error(
																					"Could not read clipboard"
																				);
																		case 10:
																		case "end":
																			return t.stop();
																	}
															},
															null,
															null,
															[[0, 7]],
															Promise
														);
													},
												},
												"Paste"
											);
										},
										size: "large",
										placeholder: "Enter receiving address",
									})
								),
								(null != p && p.has_memo) ||
									p.has_destination_tag ||
									["BNB"].includes(p.currency)
									? s.a.createElement(
											s.a.Fragment,
											null,
											s.a.createElement(
												d.a,
												{
													style: {
														marginBottom: 5,
														marginTop: 15,
													},
												},
												s.a.createElement(
													Y.Text,
													{ category: "s1" },
													"Receiving Address Memo/Tag"
												)
											),
											s.a.createElement(
												d.a,
												null,
												s.a.createElement(Y.Input, {
													value: G,
													onChangeText: function (e) {
														return J(e);
													},
													style: {
														borderWidth: 1,
														borderColor:
															c[
																"color-primary-600"
															],
														borderRadius: 5,
													},
													accessoryRight:
														function () {
															return s.a.createElement(
																Y.Button,
																{
																	size: "tiny",
																	onPress:
																		function () {
																			var e;
																			return b.a.async(
																				function (
																					t
																				) {
																					for (;;)
																						switch (
																							(t.prev =
																								t.next)
																						) {
																							case 0:
																								return (
																									(t.prev = 0),
																									(t.next = 3),
																									b.a.awrap(
																										Q.a.getStringAsync()
																									)
																								);
																							case 3:
																								(e =
																									t.sent),
																									J(
																										e
																									),
																									(t.next = 10);
																								break;
																							case 7:
																								(t.prev = 7),
																									(t.t0 =
																										t.catch(
																											0
																										)),
																									u.error(
																										"Could not read clipboard"
																									);
																							case 10:
																							case "end":
																								return t.stop();
																						}
																				},
																				null,
																				null,
																				[
																					[
																						0,
																						7,
																					],
																				],
																				Promise
																			);
																		},
																},
																"Paste"
															);
														},
													size: "large",
													placeholder:
														"Enter receiving address memo/tag",
												})
											)
									  )
									: s.a.createElement(s.a.Fragment, null),
								s.a.createElement(
									d.a,
									{
										style: {
											marginBottom: 5,
											marginTop: 15,
										},
									},
									s.a.createElement(
										d.a,
										{ style: { marginBottom: 5 } },
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											"Select Network"
										)
									),
									s.a.createElement(
										Y.Select,
										{
											disabled: 1 === p.networks.length,
											size: "large",
											placeholder: "Select a Network",
											style: {
												borderWidth: 1,
												borderColor:
													c["color-primary-600"],
												borderRadius: 5,
											},
											value: fe,
											onSelect: function (e) {
												return Ee(p.networks[e.row]);
											},
											selectedIndex: le,
										},
										p.networks.map(function (e) {
											return s.a.createElement(
												Y.SelectItem,
												{ title: e, key: e }
											);
										})
									)
								)
							),
							s.a.createElement(Y.Divider, null),
							s.a.createElement(
								d.a,
								{
									style: {
										paddingHorizontal: 15,
										paddingVertical: 25,
									},
								},
								s.a.createElement(
									Y.Text,
									{ category: "s1" },
									"Sending Account Details"
								),
								s.a.createElement(d.a, {
									style: { height: 5 },
								}),
								s.a.createElement(
									Y.Text,
									{ category: "p2" },
									"Kindly provide the account you'd be paying with. Please note that the payment must be done using the account provided below only. Payment from another account would not be regarded as payment for this transaction."
								)
							),
							s.a.createElement(
								d.a,
								{ style: { paddingHorizontal: 15 } },
								s.a.createElement(
									d.a,
									{
										style: {
											marginTop: 10,
											marginBottom: 15,
										},
									},
									s.a.createElement(
										d.a,
										{ style: { marginBottom: 5 } },
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											"Phone Number"
										)
									),
									s.a.createElement(
										d.a,
										null,
										s.a.createElement(Y.Input, {
											value: H,
											onChangeText: function (e) {
												return _(e);
											},
											style: {
												borderWidth: 1,
												borderColor:
													c["color-primary-600"],
												borderRadius: 5,
											},
											size: "large",
											placeholder: "Enter phone number",
										})
									)
								),
								o
									? s.a.createElement(
											s.a.Fragment,
											null,
											s.a.createElement(
												d.a,
												{
													style: {
														flex: 1,
														paddingVertical: 15,
													},
												},
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Select Bank"
													)
												),
												s.a.createElement(
													Y.Select,
													{
														size: "large",
														placeholder:
															"Select a Bank",
														style: {
															borderWidth: 1,
															borderColor:
																c[
																	"color-primary-600"
																],
															borderRadius: 5,
														},
														value:
															null ==
															(t = (
																null !=
																(a =
																	null == f
																		? void 0
																		: f.banks)
																	? a
																	: []
															)[le - 1])
																? void 0
																: t.name,
														onSelect: function (e) {
															return ce(e);
														},
														selectedIndex: le,
													},
													f.banks.map(function (e) {
														return s.a.createElement(
															Y.SelectItem,
															{
																title: e.name,
																key: e.name,
															}
														);
													})
												)
											),
											s.a.createElement(
												d.a,
												{
													style: {
														flex: 1,
														paddingVertical: 15,
													},
												},
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Account Number"
													)
												),
												s.a.createElement(Y.Input, {
													style: {
														borderWidth: 1,
														borderColor:
															c[
																"color-primary-600"
															],
														borderRadius: 5,
													},
													size: "large",
													value: se,
													placeholder:
														"Enter account number",
													onChangeText: function (e) {
														return ue(e);
													},
													accessoryRight:
														function () {
															return h
																? s.a.createElement(
																		Y.Spinner,
																		{
																			size: "tiny",
																			status: "success",
																		}
																  )
																: s.a.createElement(
																		s.a
																			.Fragment,
																		null
																  );
														},
												})
											)
									  )
									: s.a.createElement(
											d.a,
											{ style: { flexDirection: "row" } },
											s.a.createElement(
												d.a,
												{ style: { flex: 1 } },
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Select Bank"
													)
												),
												s.a.createElement(
													Y.Select,
													{
														size: "large",
														placeholder:
															"Select a Bank",
														style: {
															borderWidth: 1,
															borderColor:
																c[
																	"color-primary-600"
																],
															borderRadius: 5,
														},
														value:
															null ==
															(n = (
																null !=
																(r =
																	null == f
																		? void 0
																		: f.banks)
																	? r
																	: []
															)[le - 1])
																? void 0
																: n.name,
														onSelect: function (e) {
															return ce(e);
														},
														selectedIndex: le,
													},
													f.banks.map(function (e) {
														return s.a.createElement(
															Y.SelectItem,
															{
																title: e.name,
																key: e.name,
															}
														);
													})
												)
											),
											s.a.createElement(d.a, {
												style: { width: 10 },
											}),
											s.a.createElement(
												d.a,
												{ style: { width: 240 } },
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Account Number"
													)
												),
												s.a.createElement(Y.Input, {
													style: {
														borderWidth: 1,
														borderColor:
															c[
																"color-primary-600"
															],
														borderRadius: 5,
													},
													size: "large",
													value: se,
													placeholder:
														"Enter account number",
													onChangeText: function (e) {
														return ue(e);
													},
													accessoryRight:
														function () {
															return h
																? s.a.createElement(
																		Y.Spinner,
																		{
																			size: "tiny",
																			status: "success",
																		}
																  )
																: s.a.createElement(
																		s.a
																			.Fragment,
																		null
																  );
														},
												})
											)
									  ),
								s.a.createElement(
									d.a,
									{ style: { flex: 1, paddingVertical: 15 } },
									s.a.createElement(
										d.a,
										{ style: { marginBottom: 5 } },
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											"Account Name"
										)
									),
									s.a.createElement(Y.Input, {
										style: {
											borderWidth: 1,
											borderColor: c["color-primary-600"],
											borderRadius: 5,
										},
										size: "large",
										value: pe,
										placeholder: "Enter full account name",
										editable: !1,
									})
								),
								s.a.createElement(
									d.a,
									{ style: { paddingTop: 15 } },
									s.a.createElement(
										Y.Button,
										{
											size: "giant",
											onPress: function () {
												x ||
													(function () {
														var e;
														b.a.async(
															function (t) {
																for (;;)
																	switch (
																		(t.prev =
																			t.next)
																	) {
																		case 0:
																			if (
																				pe
																			) {
																				t.next = 2;
																				break;
																			}
																			return t.abrupt(
																				"return",
																				u.error(
																					"Please enter valid account details"
																				)
																			);
																		case 2:
																			if (
																				fe
																			) {
																				t.next = 4;
																				break;
																			}
																			return t.abrupt(
																				"return",
																				u.error(
																					"Please select a newtork"
																				)
																			);
																		case 4:
																			return (
																				(t.next = 6),
																				b.a.awrap(
																					y(
																						{
																							amount: P,
																							address:
																								W,
																							bank: te,
																							accountNumber:
																								se,
																							isFiat: O,
																							cryptoAmount:
																								I,
																							memoTag:
																								G,
																							phoneNumber:
																								H,
																							network:
																								fe,
																						}
																					)
																				)
																			);
																		case 6:
																			(e =
																				t.sent),
																				e.status &&
																					l.replace(
																						"Overview"
																					);
																		case 9:
																		case "end":
																			return t.stop();
																	}
															},
															null,
															null,
															null,
															Promise
														);
													})();
											},
											accessoryLeft: function () {
												return x
													? s.a.createElement(
															Y.Spinner,
															{
																size: "small",
																status: "control",
															}
													  )
													: s.a.createElement(
															s.a.Fragment,
															null
													  );
											},
										},
										x ? "Processing" : "Proceed to Payment"
									)
								)
							)
						)
					)
				);
			}
			var ne = a(115);
			function re(e) {
				e.navigation;
				var t = Object(Y.useTheme)();
				return i.createElement(
					ee,
					null,
					i.createElement(
						d.a,
						{
							style: {
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								paddingVertical: 15,
								paddingHorizontal: 15,
							},
						},
						i.createElement(
							d.a,
							null,
							i.createElement(
								Y.Text,
								{ category: "h5" },
								"Search"
							),
							i.createElement(d.a, { style: { height: 5 } }),
							i.createElement(
								Y.Text,
								{ category: "s1", appearance: "hint" },
								"Kindly search with transaction reference"
							)
						),
						i.createElement(
							U.a,
							null,
							i.createElement(Y.Icon, {
								name: "close-circle-outline",
								height: 30,
								width: 30,
								fill: t["color-basic-700"],
							})
						)
					),
					i.createElement(
						d.a,
						{ style: { paddingHorizontal: 15, paddingTop: 35 } },
						i.createElement(Y.Input, {
							placeholder: "Search reference",
							size: "large",
							accessoryRight: function (e) {
								return i.createElement(
									ne.a,
									null,
									i.createElement(
										Y.Icon,
										c()({}, e, { name: "search-outline" })
									)
								);
							},
						}),
						i.createElement(
							d.a,
							{ style: { paddingTop: 15 } },
							i.createElement(
								Y.Button,
								{ size: "large" },
								"Search"
							)
						)
					)
				);
			}
			var le = a(14),
				ce = a.n(le);
			function oe(e) {
				var t = e.theme,
					a = e.intro,
					n = e.tagline;
				return s.a.createElement(
					d.a,
					{
						style: {
							minHeight: 500,
							backgroundColor: t["color-primary-700"],
							alignItems: "center",
						},
					},
					s.a.createElement(
						d.a,
						{
							style: {
								flex: 1,
								alignItems: "center",
								paddingTop: 200,
							},
						},
						s.a.createElement(
							d.a,
							{ style: { paddingHorizontal: 25 } },
							s.a.createElement(
								Y.Text,
								{
									category: "h3",
									appearance: "alternative",
									style: { textAlign: "center" },
								},
								a
							),
							s.a.createElement(d.a, {
								style: { paddingTop: 10 },
							}),
							s.a.createElement(
								Y.Text,
								{
									category: "s1",
									allowFontScaling: !1,
									appearance: "alternative",
									style: { textAlign: "center" },
								},
								n
							)
						)
					),
					s.a.createElement(
						d.a,
						{ style: { marginBottom: 35 } },
						s.a.createElement(
							Y.Text,
							{
								appearance: "alternative",
								category: "h5",
								style: {},
							},
							"Start Trading"
						)
					)
				);
			}
			var ie = a(36);
			function se(e) {
				var t = e.theme,
					a = e.intro,
					n = e.tagline,
					r = e.image;
				return s.a.createElement(
					d.a,
					{ style: { minHeight: 500 } },
					s.a.createElement(
						d.a,
						{
							style: {
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
							},
						},
						s.a.createElement(
							d.a,
							{ style: { height: "100%", width: "100%" } },
							s.a.createElement(ie.a, {
								source: { uri: r },
								style: {
									flex: 1,
									height: void 0,
									width: void 0,
								},
								resizeMode: "cover",
							})
						),
						s.a.createElement(d.a, {
							style: {
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: t["color-primary-600"],
								opacity: 0.4,
							},
						})
					),
					s.a.createElement(
						d.a,
						{ style: { flex: 1, alignItems: "center" } },
						s.a.createElement(
							d.a,
							{
								style: {
									flex: 1,
									alignItems: "center",
									paddingTop: 200,
								},
							},
							s.a.createElement(
								d.a,
								{ style: { paddingHorizontal: 25 } },
								s.a.createElement(
									Y.Text,
									{
										category: "h3",
										appearance: "alternative",
										style: { textAlign: "center" },
									},
									a
								),
								s.a.createElement(d.a, {
									style: { paddingTop: 10 },
								}),
								s.a.createElement(
									Y.Text,
									{
										category: "s1",
										allowFontScaling: !1,
										appearance: "alternative",
										style: { textAlign: "center" },
									},
									n
								)
							)
						),
						s.a.createElement(
							d.a,
							{ style: { marginBottom: 35 } },
							s.a.createElement(
								Y.Text,
								{
									appearance: "alternative",
									category: "h5",
									style: {},
								},
								"Start Trading"
							)
						)
					)
				);
			}
			function ue(e) {
				var t = e.theme,
					a = e.intro,
					n = e.tagline,
					r = e.image;
				return s.a.createElement(
					d.a,
					{
						style: {
							minHeight: 600,
							flexDirection: "row",
							width: "100%",
						},
					},
					s.a.createElement(d.a, {
						style: {
							flex: 1,
							alignItems: "center",
							backgroundColor: t["color-primary-600"],
						},
					}),
					s.a.createElement(
						d.a,
						{ style: { flex: 1 } },
						s.a.createElement(
							d.a,
							{ style: { height: "100%", width: "100%" } },
							s.a.createElement(ie.a, {
								source: { uri: r },
								style: {
									flex: 1,
									height: void 0,
									width: void 0,
								},
								resizeMode: "cover",
							})
						),
						s.a.createElement(d.a, {
							style: {
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: t["color-primary-600"],
								opacity: 0.4,
							},
						})
					),
					s.a.createElement(
						d.a,
						{
							style: {
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								minHeight: 600,
								alignItems: "center",
							},
						},
						s.a.createElement(
							d.a,
							{
								style: {
									flex: 1,
									alignItems: "center",
									paddingTop: 200,
								},
							},
							s.a.createElement(
								d.a,
								{ style: { paddingHorizontal: 25 } },
								s.a.createElement(
									Y.Text,
									{
										category: "h1",
										appearance: "alternative",
										style: { textAlign: "center" },
									},
									a
								),
								s.a.createElement(d.a, {
									style: { paddingTop: 10 },
								}),
								s.a.createElement(
									Y.Text,
									{
										category: "s1",
										allowFontScaling: !1,
										appearance: "alternative",
										style: { textAlign: "center" },
									},
									n
								)
							)
						),
						s.a.createElement(
							d.a,
							{ style: { marginBottom: 35 } },
							s.a.createElement(
								Y.Text,
								{
									appearance: "alternative",
									category: "h5",
									style: {},
								},
								"Start Trading"
							)
						)
					)
				);
			}
			function me(e) {
				var t = e.theme,
					a = e.intro,
					n = e.tagline;
				return s.a.createElement(
					d.a,
					{
						style: {
							minHeight: 600,
							flexDirection: "row",
							width: "100%",
						},
					},
					s.a.createElement(d.a, {
						style: {
							flex: 1,
							alignItems: "center",
							backgroundColor: t["color-primary-400"],
						},
					}),
					s.a.createElement(d.a, {
						style: {
							flex: 1,
							backgroundColor: t["color-primary-600"],
						},
					}),
					s.a.createElement(
						d.a,
						{
							style: {
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								minHeight: 600,
								alignItems: "center",
							},
						},
						s.a.createElement(
							d.a,
							{
								style: {
									flex: 1,
									alignItems: "center",
									paddingTop: 200,
								},
							},
							s.a.createElement(
								d.a,
								{ style: { paddingHorizontal: 25 } },
								s.a.createElement(
									Y.Text,
									{
										category: "h1",
										appearance: "alternative",
										style: { textAlign: "center" },
									},
									a
								),
								s.a.createElement(d.a, {
									style: { paddingTop: 10 },
								}),
								s.a.createElement(
									Y.Text,
									{
										category: "s1",
										allowFontScaling: !1,
										appearance: "alternative",
										style: { textAlign: "center" },
									},
									n
								)
							)
						),
						s.a.createElement(
							d.a,
							{ style: { marginBottom: 35 } },
							s.a.createElement(
								Y.Text,
								{
									appearance: "alternative",
									category: "h5",
									style: {},
								},
								"Start Trading"
							)
						)
					)
				);
			}
			var de = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: "",
						t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
					return t[e];
				},
				pe = a(56);
			function ge(e) {
				e.theme;
				var t = $(),
					a = Object(pe.useNavigation)(),
					n = Object(w.c)(),
					r = Object(i.useContext)(k),
					l = r.currencies,
					c = void 0 === l ? [] : l,
					o = r.setCurrency,
					u = r.settings;
				return s.a.createElement(
					d.a,
					{ style: [!t && { alignItems: "center" }] },
					s.a.createElement(
						d.a,
						{
							style: [
								{
									marginTop: 25,
									paddingBottom: 0,
									marginBottom: 20,
								},
								!t && {
									maxWidth: 1200,
									minWidth: 900,
									borderWidth: 1,
									borderColor: "#ccc",
									marginHorizontal: 10,
									padding: 15,
									borderRadius: 10,
									elevation: 5,
								},
								t && { padding: 10 },
							],
						},
						c.map(function (e, r) {
							return s.a.createElement(
								ye,
								{
									isSmallDevice: t,
									onPress: function () {
										u.is_available
											? (o(e),
											  a.navigate("Buy", {
													currency: e.currency,
											  }))
											: n.error(
													"Trading is temporarily disabled, Kindly try again later."
											  );
									},
									key: e.currency,
								},
								s.a.createElement(
									d.a,
									{
										key: e.currency,
										style: [
											{
												flexDirection: "row",
												marginBottom: 25,
												alignItems: "center",
											},
										],
									},
									s.a.createElement(
										d.a,
										{ style: { paddingRight: 10 } },
										s.a.createElement(
											d.a,
											{
												style: {
													height: 30,
													width: 30,
												},
											},
											s.a.createElement(ie.a, {
												source: {
													uri:
														"https://" +
														P +
														"/img/currencies/" +
														e.currency.toLowerCase() +
														".png",
												},
												style: {
													height: void 0,
													width: void 0,
													flex: 1,
												},
											})
										)
									),
									s.a.createElement(
										d.a,
										{
											style: [
												{ flex: 1, paddingRight: 10 },
												t && {
													justifyContent:
														"space-around",
												},
											],
										},
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											e.display_name
										),
										s.a.createElement(d.a, {
											style: { paddingTop: 5 },
										}),
										s.a.createElement(
											Y.Text,
											{
												appearance: "hint",
												category: "c1",
											},
											e.currency
										)
									),
									s.a.createElement(
										d.a,
										{
											style: [
												{ flex: 1, paddingRight: 10 },
												t && {
													justifyContent:
														"space-around",
													paddingRight: 0,
													flex: void 0,
												},
											],
										},
										s.a.createElement(
											Y.Text,
											null,
											"Buy: ",
											e.buy_rate,
											" /USD"
										),
										s.a.createElement(d.a, {
											style: { paddingTop: 5 },
										}),
										s.a.createElement(
											Y.Text,
											null,
											"Sell: ",
											e.sell_rate,
											" /USD"
										)
									),
									!t &&
										s.a.createElement(
											s.a.Fragment,
											null,
											s.a.createElement(d.a, {
												style: {
													flex: 1,
													paddingRight: 10,
												},
											})
										),
									!t &&
										s.a.createElement(
											d.a,
											{ style: {} },
											s.a.createElement(
												Y.Button,
												{
													size: "small",
													onPress: function () {
														u.is_available
															? (o(e),
															  a.navigate(
																	"Buy",
																	{
																		currency:
																			e.currency,
																	}
															  ))
															: n.error(
																	"Trading is temporarily disabled, Kindly try again later."
															  );
													},
												},
												"Trade"
											)
										)
								)
							);
						})
					)
				);
			}
			var ye = function (e) {
					var t = e.onPress,
						a = e.children;
					return e.isSmallDevice
						? s.a.createElement(
								U.a,
								{ activeOpacity: 0.8, onPress: t },
								a
						  )
						: s.a.createElement(s.a.Fragment, null, a);
				},
				be = {
					NGN: a(846),
					BTC: a(847),
					BCH: a(848),
					LTC: a(849),
					ETH: a(850),
					USDT: a(851),
					TRX: a(852),
					DOGE: a(853),
					BNB: a(854),
					XRP: a(855),
					XLM: a(856),
				};
			function fe(e) {
				var t = e.theme,
					a = $(),
					n = Object(J.useNavigation)(),
					r = Object(w.c)(),
					l = Object(i.useContext)(k),
					c = l.currencies,
					o = void 0 === c ? [] : c,
					u = l.setCurrency,
					m = l.settings;
				return s.a.createElement(
					d.a,
					{
						style: {
							marginLeft: "auto",
							marginRight: "auto",
							maxWidth: 900,
							marginTop: 20,
						},
					},
					s.a.createElement(
						d.a,
						{ style: { flexDirection: "row", flexWrap: "wrap" } },
						o.map(function (e, l) {
							return s.a.createElement(
								d.a,
								{
									key: e.currency,
									style: {
										width: a ? "100%" : "49%",
										paddingVertical: 15,
										paddingHorizontal: 10,
									},
								},
								s.a.createElement(
									d.a,
									{
										style: {
											backgroundColor:
												t["color-basic-100"],
											borderWidth: 1,
											minHeight: 100,
											borderRadius: 10,
											paddingVertical: 15,
											borderColor: t["outline-color"],
											elevation: 5,
										},
									},
									s.a.createElement(
										d.a,
										{
											style: {
												flexDirection: "row",
												paddingHorizontal: 15,
												paddingBottom: 15,
												marginLeft: "auto",
												marginRight: "auto",
											},
										},
										s.a.createElement(
											d.a,
											{ style: { paddingRight: 20 } },
											s.a.createElement(
												d.a,
												{
													style: {
														height: 40,
														width: 40,
													},
												},
												s.a.createElement(ie.a, {
													source: be[e.currency],
													style: {
														height: void 0,
														width: void 0,
														flex: 1,
													},
												})
											)
										),
										s.a.createElement(
											d.a,
											{ style: { width: "100%" } },
											s.a.createElement(
												Y.Text,
												null,
												e.display_name,
												" (",
												e.currency,
												")",
												" "
											),
											s.a.createElement(d.a, {
												style: {},
											})
										)
									),
									s.a.createElement(Y.Divider, null),
									s.a.createElement(
										d.a,
										{ style: { flexDirection: "row" } },
										s.a.createElement(
											d.a,
											{
												style: {
													flex: 1,
													paddingVertical: 15,
													alignItems: "center",
													justifyContent: "center",
												},
											},
											s.a.createElement(
												Y.Text,
												null,
												"Buy Rate"
											),
											s.a.createElement(
												Y.Text,
												null,
												e.buy_rate,
												" /USD"
											)
										),
										s.a.createElement(d.a, {
											style: {
												width: 1,
												backgroundColor:
													t["outline-color"],
												height: "100%",
											},
										}),
										s.a.createElement(
											d.a,
											{
												style: {
													flex: 1,
													paddingVertical: 15,
													alignItems: "center",
													justifyContent: "center",
												},
											},
											s.a.createElement(
												Y.Text,
												null,
												"Sell Rate"
											),
											s.a.createElement(
												Y.Text,
												null,
												e.sell_rate,
												" /USD"
											)
										)
									),
									s.a.createElement(Y.Divider, null),
									s.a.createElement(
										d.a,
										{
											style: {
												justifyContent: "center",
												alignItems: "center",
												paddingTop: 15,
											},
										},
										s.a.createElement(
											Y.Button,
											{
												size: "small",
												onPress: function () {
													m.is_available
														? (u(e),
														  n.navigate("Buy", {
																currency:
																	e.currency,
														  }))
														: r.error(
																"Trading is temporarily disabled, Kindly try again later."
														  );
												},
											},
											"Trade"
										)
									)
								)
							);
						})
					)
				);
			}
			var Ee = a(69);
			function he(e) {
				var t = e.theme,
					a = $(),
					n = Object(pe.useNavigation)(),
					r = Object(i.useContext)(k).settings;
				return s.a.createElement(
					d.a,
					{
						style: {
							position: "sticky",
							alignItems: "center",
							left: 0,
							right: 0,
							top: 10,
							zIndex: 1e5,
						},
					},
					s.a.createElement(
						d.a,
						{
							style: {
								borderRadius: 150,
								borderWidth: 1,
								borderColor: t["color-primary-600"],
								backgroundColor: t["color-basic-100"],
								paddingHorizontal: 30,
								paddingVertical: 15,
								minWidth: a ? 240 : 320,
								height: a ? 50 : 75,
								alignItems: "center",
								justifyContent: "space-between",
								flexDirection: "row",
							},
						},
						s.a.createElement(
							d.a,
							{ style: { height: 30, width: 30 } },
							s.a.createElement(ie.a, {
								source: { uri: null == r ? void 0 : r.logo },
								style: {
									height: void 0,
									width: void 0,
									flex: 1,
								},
							})
						),
						s.a.createElement(
							d.a,
							{
								style: {
									flexDirection: "row",
									alignItems: "center",
								},
							},
							a
								? s.a.createElement(
										s.a.Fragment,
										null,
										s.a.createElement(
											U.a,
											{
												activeOpacity: 0.8,
												onPress: function () {
													return Ee.a.openURL(
														"mailto: " + r.email
													);
												},
											},
											s.a.createElement(Y.Icon, {
												name: "email-outline",
												height: 30,
												fill: t["color-primary-600"],
												width: 30,
											})
										)
								  )
								: s.a.createElement(
										Y.Button,
										{
											size: "medium",
											style: { borderRadius: 400 },
											onPress: function () {
												return Ee.a.openURL(
													"mailto: " + r.email
												);
											},
										},
										"Contact"
								  ),
							s.a.createElement(
								U.a,
								{
									activeOpacity: 0.8,
									style: { paddingLeft: 15 },
									onPress: function () {
										return n.navigate("Search");
									},
								},
								s.a.createElement(Y.Icon, {
									name: "search-outline",
									height: 30,
									fill: t["color-primary-600"],
									width: 30,
								})
							)
						)
					)
				);
			}
			function xe(e) {
				var t = e.theme,
					a = $(),
					n = Object(pe.useNavigation)(),
					r = Object(i.useContext)(k).settings;
				return s.a.createElement(
					d.a,
					{
						style: {
							position: "sticky",
							left: 0,
							right: 0,
							top: 10,
							zIndex: 1e5,
						},
					},
					s.a.createElement(
						d.a,
						{
							style: {
								flexDirection: "row",
								minWidth: a ? "100%" : 900,
								justifyContent: "space-between",
								marginLeft: "auto",
								marginRight: "auto",
								alignItems: "center",
								paddingHorizontal: 15,
							},
						},
						s.a.createElement(
							d.a,
							null,
							s.a.createElement(
								d.a,
								{ style: { height: 30, width: 30 } },
								s.a.createElement(ie.a, {
									source: {
										uri: null == r ? void 0 : r.logo,
									},
									style: {
										height: void 0,
										width: void 0,
										flex: 1,
									},
								})
							)
						),
						s.a.createElement(
							d.a,
							null,
							s.a.createElement(
								d.a,
								{
									style: {
										borderRadius: 150,
										borderWidth: 1,
										borderColor: t["color-primary-600"],
										backgroundColor: t["color-basic-100"],
										paddingHorizontal: 30,
										paddingVertical: 15,
										minWidth: 120,
										height: a ? 50 : 75,
										alignItems: "center",
										flexDirection: "row",
									},
								},
								s.a.createElement(
									d.a,
									{
										style: {
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "space-between",
										},
									},
									a
										? s.a.createElement(
												s.a.Fragment,
												null,
												s.a.createElement(
													U.a,
													{
														activeOpacity: 0.8,
														onPress: function () {
															return Ee.a.openURL(
																"mailto: " +
																	r.email
															);
														},
													},
													s.a.createElement(Y.Icon, {
														name: "email-outline",
														height: 30,
														fill: t[
															"color-primary-600"
														],
														width: 30,
													})
												)
										  )
										: s.a.createElement(
												Y.Button,
												{
													size: "medium",
													style: {
														borderRadius: 400,
													},
													onPress: function () {
														return Ee.a.openURL(
															"mailto: " + r.email
														);
													},
												},
												"Contact"
										  ),
									s.a.createElement(
										U.a,
										{
											activeOpacity: 0.8,
											style: { paddingLeft: 15 },
											onPress: function () {
												return n.navigate("Search");
											},
										},
										s.a.createElement(Y.Icon, {
											name: "search-outline",
											height: 30,
											fill: t["color-primary-600"],
											width: 30,
										})
									)
								)
							)
						)
					)
				);
			}
			var ve = a(254),
				we = ["intro", "tagline", "banner"];
			function je() {
				var e,
					t,
					a,
					n,
					r,
					l,
					c = Object(Y.useTheme)(),
					o = Object(i.useContext)(k).settings;
				return s.a.createElement(
					Y.Layout,
					{ style: { flex: 1 } },
					s.a.createElement(Oe, {
						theme: c,
						current:
							null == o || null == (e = o.theme)
								? void 0
								: e.navbar,
						settings: o,
					}),
					s.a.createElement(
						M.a,
						{
							style: {
								flex: 1,
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
							},
						},
						s.a.createElement(Te, {
							theme: c,
							current:
								null == o || null == (t = o.theme)
									? void 0
									: t.header,
							settings: o,
						}),
						s.a.createElement(Se, {
							theme: c,
							current:
								null == o || null == (a = o.theme)
									? void 0
									: a.list,
							settings: o,
						}),
						s.a.createElement(
							d.a,
							{
								style: {
									alignItems: "center",
									paddingVertical: 20,
								},
							},
							s.a.createElement(
								Y.Text,
								{ category: "s1" },
								"\xa9 ",
								new Date().getFullYear() + " " + o.name,
								". All rights reserved."
							),
							(null == o || null == (n = o.theme)
								? void 0
								: n.header.includes("image")) &&
								s.a.createElement(
									d.a,
									{
										style: {
											flexDirection: "row",
											marginBottom: 30,
											alignItems: "center",
											justifyContent: "center",
											marginTop: 10,
										},
									},
									s.a.createElement(
										Y.Text,
										{ category: "p2" },
										"Photo by "
									),
									s.a.createElement(
										U.a,
										{
											onPress: function () {
												var e, t;
												ve.a(
													null == o ||
														null == (e = o.theme) ||
														null == (t = e.banner)
														? void 0
														: t.user.link
												);
											},
										},
										s.a.createElement(
											Y.Text,
											{
												category: "p2",
												style: {
													textDecorationStyle:
														"solid",
													textDecorationLine:
														"underline",
												},
											},
											null == o ||
												null == (r = o.theme) ||
												null == (l = r.banner)
												? void 0
												: l.user.username,
											" "
										)
									),
									s.a.createElement(
										Y.Text,
										{ category: "p2" },
										"on "
									),
									s.a.createElement(
										U.a,
										{
											onPress: function () {
												ve.a("https://unsplash.com");
											},
										},
										s.a.createElement(
											Y.Text,
											{
												category: "p2",
												style: {
													textDecorationStyle:
														"solid",
													textDecorationLine:
														"underline",
												},
											},
											"Unsplash"
										)
									)
								)
						)
					)
				);
			}
			function Oe(e) {
				var t = e.theme,
					a = e.current,
					n = void 0 === a ? "single-nav" : a;
				e.settings;
				return de(n, {
					"single-nav": s.a.createElement(he, { theme: t }),
					"split-nav": s.a.createElement(xe, { theme: t }),
				});
			}
			function Te(e) {
				var t,
					a,
					n = e.theme,
					r = e.current,
					l = void 0 === r ? "split-color" : r,
					c = e.settings.theme,
					o = c.intro,
					i = c.tagline,
					u = c.banner;
				ce()(c, we);
				return de(l, {
					"full-color": s.a.createElement(oe, {
						theme: n,
						intro: o,
						tagline: i,
					}),
					"full-image": s.a.createElement(se, {
						theme: n,
						intro: o,
						tagline: i,
						image:
							null == u || null == (t = u.urls)
								? void 0
								: t.regular,
					}),
					"half-image": s.a.createElement(ue, {
						theme: n,
						intro: o,
						tagline: i,
						image:
							null == u || null == (a = u.urls)
								? void 0
								: a.regular,
					}),
					"split-color": s.a.createElement(me, {
						theme: n,
						intro: o,
						tagline: i,
					}),
				});
			}
			function Se(e) {
				var t = e.theme,
					a = e.current,
					n = void 0 === a ? "by-cards" : a;
				e.settings;
				return de(n, {
					"by-table": s.a.createElement(ge, { theme: t }),
					"by-cards": s.a.createElement(fe, { theme: t }),
				});
			}
			var ke = a(1432),
				Ce = a(1433),
				Pe = a(485);
			function Be(e) {
				var t = e.navigation,
					a = Object(Y.useTheme)(),
					n = Object(w.c)(),
					r = Object(i.useContext)(k).order;
				return s.a.createElement(
					ee,
					null,
					s.a.createElement(
						M.a,
						{
							style: { flex: 1 },
							contentContainerStyle: { paddingBottom: 50 },
						},
						s.a.createElement(
							d.a,
							{
								style: {
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									paddingVertical: 15,
									paddingHorizontal: 15,
								},
							},
							s.a.createElement(
								d.a,
								null,
								s.a.createElement(
									Y.Text,
									{ category: "s1" },
									"Order Details"
								)
							),
							s.a.createElement(
								U.a,
								{
									onPress: function () {
										return t.goBack();
									},
								},
								s.a.createElement(Y.Icon, {
									name: "close-circle-outline",
									height: 30,
									width: 30,
									fill: a["color-basic-700"],
								})
							)
						),
						s.a.createElement(Y.Divider, null),
						s.a.createElement(
							d.a,
							{
								style: {
									paddingVertical: 15,
									paddingHorizontal: 15,
									marginBottom: 15,
								},
							},
							s.a.createElement(
								d.a,
								{ style: { paddingVertical: 15 } },
								s.a.createElement(
									Y.Text,
									{ category: "h6" },
									"Reference Number"
								),
								s.a.createElement(
									Y.Text,
									{ category: "s1" },
									r.reference
								)
							),
							s.a.createElement(
								d.a,
								{ style: { paddingVertical: 15 } },
								s.a.createElement(
									Y.Text,
									{ category: "h6" },
									"Buying Amount"
								),
								s.a.createElement(
									Y.Text,
									{ category: "s1" },
									"NGN ",
									r.amount.toLocaleString()
								),
								s.a.createElement(
									Y.Text,
									{ category: "p2" },
									"Apr ~ ",
									r.cryptoAmount,
									" ",
									r.currency
								)
							),
							s.a.createElement(
								d.a,
								{ style: { paddingVertical: 15 } },
								s.a.createElement(
									Y.Text,
									{ category: "h6" },
									"Timer"
								),
								s.a.createElement(
									d.a,
									{ style: { flexDirection: "row" } },
									s.a.createElement(
										Y.Text,
										{ category: "s1", status: "danger" },
										s.a.createElement(ze, null, r.time)
									),
									s.a.createElement(
										d.a,
										{ style: { paddingLeft: 10 } },
										s.a.createElement(Y.Spinner, {
											size: "tiny",
											status: "danger",
										}),
										" "
									)
								)
							)
						),
						s.a.createElement(Y.Divider, null),
						"BUY" == r.type &&
							s.a.createElement(
								s.a.Fragment,
								null,
								s.a.createElement(
									d.a,
									{
										style: {
											paddingVertical: 15,
											paddingHorizontal: 15,
											marginTop: 15,
										},
									},
									s.a.createElement(
										Y.Text,
										{ category: "h6" },
										"Receiving Account Details"
									),
									s.a.createElement(d.a, {
										style: { height: 5 },
									}),
									s.a.createElement(
										Y.Text,
										{ category: "p2" },
										"Kindly make a payment of your buying amount to the account details provided below. Your cryptocurrency will be released into your receiving address only when payment has been successfuly verified."
									)
								),
								s.a.createElement(
									d.a,
									{ style: { paddingHorizontal: 15 } },
									s.a.createElement(
										d.a,
										{ style: { paddingVertical: 15 } },
										s.a.createElement(
											Y.Text,
											{ category: "h6" },
											"Account Name"
										),
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											r.accountName
										)
									),
									s.a.createElement(
										d.a,
										{ style: { paddingVertical: 15 } },
										s.a.createElement(
											Y.Text,
											{ category: "h6" },
											"Bank Name"
										),
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											r.bankName
										)
									),
									s.a.createElement(
										d.a,
										{ style: { paddingVertical: 15 } },
										s.a.createElement(
											Y.Text,
											{ category: "h6" },
											"Account Number"
										),
										s.a.createElement(
											d.a,
											{
												style: {
													flexDirection: "row",
													alignItems: "center",
												},
											},
											s.a.createElement(
												Y.Text,
												{ category: "s1" },
												r.accountNumber
											),
											s.a.createElement(
												U.a,
												{
													style: {
														paddingHorizontal: 10,
													},
													onPress: function () {
														return b.a.async(
															function (e) {
																for (;;)
																	switch (
																		(e.prev =
																			e.next)
																	) {
																		case 0:
																			return (
																				(e.next = 2),
																				b.a.awrap(
																					Q.a.setString(
																						r.accountNumber
																					)
																				)
																			);
																		case 2:
																			n.success(
																				r.bankName +
																					" Account Number Copied"
																			);
																		case 3:
																		case "end":
																			return e.stop();
																	}
															},
															null,
															null,
															null,
															Promise
														);
													},
												},
												s.a.createElement(Y.Icon, {
													name: "copy",
													fill: a[
														"color-primary-600"
													],
													width: 20,
													height: 20,
												})
											)
										)
									)
								)
							),
						"SELL" == r.type &&
							s.a.createElement(
								s.a.Fragment,
								null,
								s.a.createElement(
									d.a,
									{
										style: {
											paddingVertical: 15,
											paddingHorizontal: 15,
											marginTop: 15,
										},
									},
									s.a.createElement(
										Y.Text,
										{ category: "h6" },
										"Receiving Account Details"
									),
									s.a.createElement(d.a, {
										style: { height: 5 },
									}),
									s.a.createElement(
										Y.Text,
										{ category: "p2" },
										"Kindly make a payment of your selling amount to the address provided below. Your payment will be released to your bank account once your crypto has received at least one blockchain confirmation."
									)
								),
								s.a.createElement(
									d.a,
									{ style: { paddingHorizontal: 15 } },
									s.a.createElement(
										d.a,
										{ style: { paddingVertical: 15 } },
										s.a.createElement(
											d.a,
											{ style: {} },
											s.a.createElement(Pe.a, {
												logo: be[r.currency],
												logoSize: 40,
												logoBackgroundColor:
													"transparent",
												value: r.address,
												size: 150,
											})
										)
									),
									s.a.createElement(
										d.a,
										{ style: { paddingVertical: 15 } },
										s.a.createElement(
											Y.Text,
											{ category: "h6" },
											r.currency,
											" Address"
										),
										s.a.createElement(
											d.a,
											{
												style: {
													flexDirection: "row",
													alignItems: "center",
													width: "100%",
												},
											},
											s.a.createElement(
												d.a,
												{ style: { flex: 1 } },
												s.a.createElement(
													Y.Text,
													{ category: "s1" },
													r.address
												)
											),
											s.a.createElement(
												U.a,
												{
													style: {
														paddingHorizontal: 10,
													},
													onPress: function () {
														return b.a.async(
															function (e) {
																for (;;)
																	switch (
																		(e.prev =
																			e.next)
																	) {
																		case 0:
																			return (
																				(e.next = 2),
																				b.a.awrap(
																					Q.a.setString(
																						r.address
																					)
																				)
																			);
																		case 2:
																			n.success(
																				r.currency +
																					" Address Copied"
																			);
																		case 3:
																		case "end":
																			return e.stop();
																	}
															},
															null,
															null,
															null,
															Promise
														);
													},
												},
												s.a.createElement(Y.Icon, {
													name: "copy",
													fill: a[
														"color-primary-600"
													],
													width: 25,
													height: 25,
												})
											)
										),
										r.memoTag
											? s.a.createElement(
													s.a.Fragment,
													null,
													s.a.createElement(
														Y.Text,
														{ category: "h6" },
														r.currency,
														" Address Memo/Tag"
													),
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														r.memoTag
													)
											  )
											: s.a.createElement(
													s.a.Fragment,
													null
											  )
									),
									s.a.createElement(
										d.a,
										{ style: { paddingBottom: 15 } },
										s.a.createElement(
											Y.Text,
											{ category: "h6" },
											r.network,
											" NETWORK"
										)
									)
								)
							),
						s.a.createElement(
							d.a,
							{ style: { paddingHorizontal: 15 } },
							s.a.createElement(
								Y.Button,
								{
									size: "giant",
									onPress: function () {
										return b.a.async(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(e.next = 2),
																b.a.awrap(
																	Q.a.setString(
																		r.reference
																	)
																)
															);
														case 2:
															n.success(
																"Reference Number Copied To Clipboard"
															);
														case 3:
														case "end":
															return e.stop();
													}
											},
											null,
											null,
											null,
											Promise
										);
									},
								},
								"Copy reference"
							)
						)
					)
				);
			}
			var ze = function (e) {
				var t = e.children,
					a = Object(i.useState)(new Date()),
					n = g()(a, 2),
					r = (n[0], n[1]);
				Object(i.useEffect)(function () {
					var e = setInterval(function () {
						return r(Date.now());
					}, 2e3);
					return function () {
						clearInterval(e);
					};
				}, []);
				var l = parseInt(Object(ke.a)(new Date(), Object(Ce.a)(t)), 10),
					c = Math.floor(l / 3600),
					o = Math.floor((l - 3600 * c) / 60),
					s = l - 3600 * c - 60 * o;
				return (
					c < 10 && (c = "0" + c),
					o < 10 && (o = "0" + o),
					s < 10 && (s = "0" + s),
					c + ":" + o + ":" + s
				);
			};
			function Re(e) {
				var t = e.navigation,
					a = Object(Y.useTheme)(),
					n = Object(w.c)(),
					r = Object(i.useState)(""),
					l = g()(r, 2),
					o = l[0],
					u = l[1],
					m = Object(i.useContext)(k),
					p = m.searchOrder,
					y = m.loadingGetOrder,
					f = function () {
						var e;
						return b.a.async(
							function (a) {
								for (;;)
									switch ((a.prev = a.next)) {
										case 0:
											return (
												(a.next = 2), b.a.awrap(p(o))
											);
										case 2:
											if (((e = a.sent), e.status)) {
												a.next = 6;
												break;
											}
											return a.abrupt(
												"return",
												n.error("Order not found")
											);
										case 6:
											t.replace("Overview");
										case 7:
										case "end":
											return a.stop();
									}
							},
							null,
							null,
							null,
							Promise
						);
					};
				return s.a.createElement(
					ee,
					null,
					s.a.createElement(
						d.a,
						{
							style: {
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								paddingVertical: 15,
								paddingHorizontal: 15,
							},
						},
						s.a.createElement(
							d.a,
							null,
							s.a.createElement(
								Y.Text,
								{ category: "h5" },
								"Search"
							),
							s.a.createElement(d.a, { style: { height: 5 } }),
							s.a.createElement(
								Y.Text,
								{ category: "s1", appearance: "hint" },
								"Kindly search with transaction reference"
							)
						),
						s.a.createElement(
							U.a,
							{
								onPress: function () {
									return t.goBack();
								},
							},
							s.a.createElement(Y.Icon, {
								name: "close-circle-outline",
								height: 30,
								width: 30,
								fill: a["color-basic-700"],
							})
						)
					),
					s.a.createElement(
						d.a,
						{ style: { paddingHorizontal: 15, paddingTop: 35 } },
						s.a.createElement(Y.Input, {
							placeholder: "Search reference",
							size: "large",
							accessoryRight: function (e) {
								return s.a.createElement(
									ne.a,
									{ onPress: f },
									s.a.createElement(
										Y.Icon,
										c()({}, e, { name: "search-outline" })
									)
								);
							},
							onChangeText: u,
							value: o,
						}),
						s.a.createElement(
							d.a,
							{ style: { paddingTop: 15 } },
							s.a.createElement(
								d.a,
								{ style: { paddingTop: 15 } },
								s.a.createElement(
									Y.Button,
									{
										size: "giant",
										onPress: function () {
											y || f();
										},
										accessoryLeft: function () {
											return y
												? s.a.createElement(Y.Spinner, {
														size: "small",
														status: "control",
												  })
												: s.a.createElement(
														s.a.Fragment,
														null
												  );
										},
									},
									y ? "Searching" : "Search"
								)
							)
						)
					)
				);
			}
			function Ie(e) {
				var t,
					a,
					n,
					r,
					l = e.navigation,
					c = Object(Y.useTheme)(),
					o = $(),
					u = Object(w.c)(),
					m = Object(i.useContext)(k),
					p = m.currency,
					y = m.sellCrypto,
					f = m.settings,
					E = m.resolveAccount,
					h = m.loadingAccountResolve,
					x = m.loadingSellRequest,
					v = Object(i.useState)(!0),
					j = g()(v, 2),
					O = j[0],
					T = j[1],
					S = Object(i.useState)("0.00"),
					C = g()(S, 2),
					P = C[0],
					B = C[1],
					z = Object(i.useState)("0.00"),
					R = g()(z, 2),
					I = R[0],
					N = R[1],
					D = Object(i.useState)(""),
					A = g()(D, 2),
					H = A[0],
					_ = A[1],
					F = Object(i.useState)(""),
					V = g()(F, 2),
					W = V[0],
					q = V[1],
					L = Object(i.useState)(),
					K = g()(L, 2),
					G = K[0],
					Q = K[1],
					J = Object(i.useState)(""),
					X = g()(J, 2),
					Z = X[0],
					te = X[1],
					ae = Object(i.useState)(""),
					ne = g()(ae, 2),
					re = ne[0],
					le = ne[1],
					ce = Object(i.useState)(
						p.networks.length >= 2 ? "" : p.networks[0]
					),
					oe = g()(ce, 2),
					ie = oe[0],
					se = oe[1];
				Object(i.useEffect)(
					function () {
						O && N(P / p.fiat_buy_price),
							O || B(I * p.fiat_buy_price);
					},
					[O, P, I]
				);
				return (
					Object(i.useEffect)(
						function () {
							Z.length >= 10
								? (function () {
										var e, t;
										b.a.async(
											function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(a.next = 2),
																b.a.awrap(
																	E({
																		bank: W,
																		accountNumber:
																			Z,
																	})
																)
															);
														case 2:
															(e = a.sent),
																(t = e.name),
																e.status &&
																	le(t);
														case 6:
														case "end":
															return a.stop();
													}
											},
											null,
											null,
											null,
											Promise
										);
								  })()
								: le("");
						},
						[W, Z]
					),
					Object(i.useEffect)(
						function () {
							le("");
						},
						[W]
					),
					Object(i.useEffect)(
						function () {
							G && q(f.banks[G.row].code);
						},
						[G]
					),
					s.a.createElement(
						ee,
						null,
						s.a.createElement(
							M.a,
							{
								style: { flex: 1 },
								contentContainerStyle: { paddingBottom: 50 },
							},
							s.a.createElement(
								d.a,
								{
									style: {
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										paddingVertical: 15,
										paddingHorizontal: 15,
									},
								},
								s.a.createElement(
									Y.Text,
									{ category: "h6" },
									"What do you want to do?"
								),
								!x &&
									s.a.createElement(
										U.a,
										{
											activeOpacity: 0.8,
											onPress: function () {
												return l.goBack();
											},
										},
										s.a.createElement(Y.Icon, {
											name: "close-circle-outline",
											height: 30,
											width: 30,
											fill: c["color-basic-700"],
										})
									)
							),
							s.a.createElement(
								d.a,
								{
									style: {
										flexDirection: "row",
										paddingHorizontal: 15,
										marginBottom: 20,
									},
								},
								s.a.createElement(
									d.a,
									{ style: { width: o ? 125 : 175 } },
									s.a.createElement(
										Y.Button,
										{
											style: { borderRadius: 400 },
											size: o ? "medium" : "giant",
										},
										"SELL ",
										p.currency
									)
								),
								s.a.createElement(d.a, {
									style: { width: 25 },
								}),
								s.a.createElement(
									d.a,
									{ style: { width: o ? 125 : 175 } },
									s.a.createElement(
										Y.Button,
										{
											style: {
												backgroundColor: "transparent",
												borderRadius: 400,
											},
											size: o ? "medium" : "giant",
											appearance: "outline",
											onPress: function () {
												return l.replace("Buy");
											},
										},
										"BUY ",
										p.currency
									)
								)
							),
							s.a.createElement(Y.Divider, null),
							s.a.createElement(
								d.a,
								{
									style: {
										paddingHorizontal: 15,
										marginVertical: 20,
									},
								},
								s.a.createElement(
									d.a,
									{ style: { marginBottom: 5 } },
									s.a.createElement(
										Y.Text,
										{ category: "s1" },
										"How much do you want to sell?"
									)
								),
								s.a.createElement(
									d.a,
									null,
									s.a.createElement(Y.Input, {
										style: {
											borderWidth: 1,
											borderColor: c["color-primary-600"],
											borderRadius: 5,
										},
										value: O ? P : I,
										onChangeText: function (e) {
											O && B(e), O || N(e);
										},
										keyboardType: "decimal-pad",
										accessoryRight: function () {
											return O
												? s.a.createElement(
														s.a.Fragment,
														null
												  )
												: s.a.createElement(
														Y.Text,
														{
															status: "primary",
															category: "label",
														},
														p.currency
												  );
										},
										accessoryLeft: function () {
											return O
												? s.a.createElement(
														Y.Text,
														{
															status: "primary",
															category: "label",
														},
														"NGN"
												  )
												: s.a.createElement(
														s.a.Fragment,
														null
												  );
										},
										size: "large",
										placeholder: "Enter amount",
									})
								),
								s.a.createElement(
									d.a,
									{
										style: {
											marginTop: 5,
											flexDirection: "row",
											justifyContent: "space-between",
										},
									},
									s.a.createElement(
										Y.Text,
										{ category: "s2" },
										"~",
										" ",
										O
											? Number(I).toFixed(8) +
													" " +
													p.currency
											: "NGN " + P.toLocaleString()
									),
									s.a.createElement(
										U.a,
										{
											onPress: function () {
												return T(!O);
											},
										},
										s.a.createElement(
											d.a,
											{
												style: {
													flexDirection: "row",
													alignItems: "center",
													justifyContent: "center",
												},
											},
											s.a.createElement(
												d.a,
												{ style: { marginRight: 2 } },
												s.a.createElement(
													Y.Text,
													{
														category: "label",
														status: "danger",
													},
													O ? "By Crypto" : "By Cash"
												)
											),
											s.a.createElement(Y.Icon, {
												name: "swap-outline",
												width: 15,
												height: 15,
												fill: c["color-danger-600"],
											})
										)
									)
								),
								s.a.createElement(
									d.a,
									{ style: { marginTop: 15 } },
									s.a.createElement(
										d.a,
										{ style: { marginBottom: 5 } },
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											"Select Network"
										)
									),
									s.a.createElement(
										Y.Select,
										{
											disabled: 1 === p.networks.length,
											size: "large",
											placeholder: "Select a Network",
											style: {
												borderWidth: 1,
												borderColor:
													c["color-primary-600"],
												borderRadius: 5,
											},
											value: ie,
											onSelect: function (e) {
												return se(p.networks[e.row]);
											},
											selectedIndex: G,
										},
										p.networks.map(function (e) {
											return s.a.createElement(
												Y.SelectItem,
												{ title: e, key: e }
											);
										})
									)
								)
							),
							s.a.createElement(Y.Divider, null),
							s.a.createElement(
								d.a,
								{
									style: {
										paddingHorizontal: 15,
										paddingVertical: 25,
									},
								},
								s.a.createElement(
									Y.Text,
									{ category: "s1" },
									"Receiving Account Details"
								),
								s.a.createElement(d.a, {
									style: { height: 5 },
								}),
								s.a.createElement(
									Y.Text,
									{ category: "p2" },
									"Kindly provide the bank account details where you want to receive money for your crypto."
								)
							),
							s.a.createElement(
								d.a,
								{ style: { paddingHorizontal: 15 } },
								s.a.createElement(
									d.a,
									{
										style: {
											marginTop: 10,
											marginBottom: 15,
										},
									},
									s.a.createElement(
										d.a,
										{ style: { marginBottom: 5 } },
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											"Phone Number"
										)
									),
									s.a.createElement(
										d.a,
										null,
										s.a.createElement(Y.Input, {
											value: H,
											onChangeText: function (e) {
												return _(e);
											},
											style: {
												borderWidth: 1,
												borderColor:
													c["color-primary-600"],
												borderRadius: 5,
											},
											size: "large",
											placeholder: "Enter phone number",
										})
									)
								),
								o
									? s.a.createElement(
											s.a.Fragment,
											null,
											" ",
											s.a.createElement(
												d.a,
												{
													style: {
														flex: 1,
														paddingVertical: 15,
													},
												},
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Select Bank"
													)
												),
												s.a.createElement(
													Y.Select,
													{
														size: "large",
														placeholder:
															"Select a Bank",
														style: {
															borderWidth: 1,
															borderColor:
																c[
																	"color-primary-600"
																],
															borderRadius: 5,
														},
														value:
															null ==
															(t = (
																null !=
																(a =
																	null == f
																		? void 0
																		: f.banks)
																	? a
																	: []
															)[G - 1])
																? void 0
																: t.name,
														onSelect: function (e) {
															return Q(e);
														},
														selectedIndex: G,
													},
													f.banks.map(function (e) {
														return s.a.createElement(
															Y.SelectItem,
															{
																title: e.name,
																key: e.name,
															}
														);
													})
												)
											),
											s.a.createElement(
												d.a,
												{
													style: {
														flex: 1,
														paddingVertical: 15,
													},
												},
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Account Number"
													)
												),
												s.a.createElement(Y.Input, {
													style: {
														borderWidth: 1,
														borderColor:
															c[
																"color-primary-600"
															],
														borderRadius: 5,
													},
													size: "large",
													value: Z,
													placeholder:
														"Enter account number",
													onChangeText: function (e) {
														return te(e);
													},
													accessoryRight:
														function () {
															return h
																? s.a.createElement(
																		Y.Spinner,
																		{
																			size: "tiny",
																			status: "success",
																		}
																  )
																: s.a.createElement(
																		s.a
																			.Fragment,
																		null
																  );
														},
												})
											)
									  )
									: s.a.createElement(
											d.a,
											{ style: { flexDirection: "row" } },
											s.a.createElement(
												d.a,
												{ style: { flex: 1 } },
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Select Bank"
													)
												),
												s.a.createElement(
													Y.Select,
													{
														size: "large",
														placeholder:
															"Select a Bank",
														style: {
															borderWidth: 1,
															borderColor:
																c[
																	"color-primary-600"
																],
															borderRadius: 5,
														},
														value:
															null ==
															(n = (
																null !=
																(r =
																	null == f
																		? void 0
																		: f.banks)
																	? r
																	: []
															)[G - 1])
																? void 0
																: n.name,
														onSelect: function (e) {
															return Q(e);
														},
														selectedIndex: G,
													},
													f.banks.map(function (e) {
														return s.a.createElement(
															Y.SelectItem,
															{
																title: e.name,
																key: e.name,
															}
														);
													})
												)
											),
											s.a.createElement(d.a, {
												style: { width: 10 },
											}),
											s.a.createElement(
												d.a,
												{ style: { width: 240 } },
												s.a.createElement(
													d.a,
													{
														style: {
															marginBottom: 5,
														},
													},
													s.a.createElement(
														Y.Text,
														{ category: "s1" },
														"Account Number"
													)
												),
												s.a.createElement(Y.Input, {
													style: {
														borderWidth: 1,
														borderColor:
															c[
																"color-primary-600"
															],
														borderRadius: 5,
													},
													size: "large",
													value: Z,
													placeholder:
														"Enter account number",
													onChangeText: function (e) {
														return te(e);
													},
													accessoryRight:
														function () {
															return h
																? s.a.createElement(
																		Y.Spinner,
																		{
																			size: "tiny",
																			status: "success",
																		}
																  )
																: s.a.createElement(
																		s.a
																			.Fragment,
																		null
																  );
														},
												})
											)
									  ),
								s.a.createElement(
									d.a,
									{ style: { flex: 1, paddingVertical: 15 } },
									s.a.createElement(
										d.a,
										{ style: { marginBottom: 5 } },
										s.a.createElement(
											Y.Text,
											{ category: "s1" },
											"Account Name"
										)
									),
									s.a.createElement(Y.Input, {
										style: {
											borderWidth: 1,
											borderColor: c["color-primary-600"],
											borderRadius: 5,
										},
										size: "large",
										value: re,
										placeholder: "Enter full account name",
										editable: !1,
									})
								),
								s.a.createElement(
									d.a,
									{ style: { paddingTop: 15 } },
									s.a.createElement(
										Y.Button,
										{
											size: "giant",
											onPress: function () {
												x ||
													(function () {
														var e;
														b.a.async(
															function (t) {
																for (;;)
																	switch (
																		(t.prev =
																			t.next)
																	) {
																		case 0:
																			if (
																				re
																			) {
																				t.next = 2;
																				break;
																			}
																			return t.abrupt(
																				"return",
																				u.error(
																					"Please enter valid account details"
																				)
																			);
																		case 2:
																			if (
																				ie
																			) {
																				t.next = 4;
																				break;
																			}
																			return t.abrupt(
																				"return",
																				u.error(
																					"Please select a newtork"
																				)
																			);
																		case 4:
																			return (
																				(t.next = 6),
																				b.a.awrap(
																					y(
																						{
																							amount: P,
																							bank: W,
																							accountNumber:
																								Z,
																							isFiat: O,
																							cryptoAmount:
																								I,
																							phoneNumber:
																								H,
																							network:
																								ie,
																						}
																					)
																				)
																			);
																		case 6:
																			(e =
																				t.sent),
																				e.status &&
																					l.replace(
																						"Overview"
																					);
																		case 9:
																		case "end":
																			return t.stop();
																	}
															},
															null,
															null,
															null,
															Promise
														);
													})();
											},
											accessoryLeft: function () {
												return x
													? s.a.createElement(
															Y.Spinner,
															{
																size: "small",
																status: "control",
															}
													  )
													: s.a.createElement(
															s.a.Fragment,
															null
													  );
											},
										},
										x ? "Processing" : "Proceed to Payment"
									)
								)
							)
						)
					)
				);
			}
			var Ne = a(477),
				De = a.n(Ne);
			function Ae(e) {
				e.colorScheme;
				return s.a.createElement(
					s.a.Fragment,
					null,
					s.a.createElement(K.a, null, s.a.createElement(_e, null))
				);
			}
			var He = Object(G.a)();
			function _e() {
				var e = Object(i.useContext)(k).settings;
				return s.a.createElement(
					s.a.Fragment,
					null,
					s.a.createElement(De.a, {
						url: null == e ? void 0 : e.logo,
					}),
					s.a.createElement(
						He.Navigator,
						{
							screenOptions: {
								headerShown: !1,
								cardStyle: { backgroundColor: "transparent" },
								cardOverlayEnabled: !0,
								cardStyleInterpolator: function (e) {
									var t = e.current.progress;
									return {
										cardStyle: {
											opacity: t.interpolate({
												inputRange: [0, 0.5, 0.9, 1],
												outputRange: [0, 0.25, 0.7, 1],
											}),
										},
										overlayStyle: {
											opacity: t.interpolate({
												inputRange: [0, 1],
												outputRange: [0, 0.8],
												extrapolate: "clamp",
											}),
										},
									};
								},
							},
							mode: "modal",
						},
						s.a.createElement(He.Screen, {
							name: "Home",
							component: je,
							options: { title: e.name + " - Home" },
						}),
						s.a.createElement(He.Screen, {
							name: "Contact",
							component: re,
						}),
						s.a.createElement(He.Screen, {
							name: "Search",
							component: Re,
						}),
						s.a.createElement(He.Screen, {
							name: "Overview",
							component: Be,
						}),
						s.a.createElement(He.Screen, {
							name: "Buy",
							component: ae,
						}),
						s.a.createElement(He.Screen, {
							name: "Sell",
							component: Ie,
						})
					)
				);
			}
			var Fe = a(479),
				Ve = a(252),
				We = a(482),
				qe = a(480),
				Le = (a(901), a(481)),
				Ke = a.n(Le);
			function Ge(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(
								e,
								t
							).enumerable;
						})),
						a.push.apply(a, n);
				}
				return a;
			}
			function Ue(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ge(Object(a), !0).forEach(function (t) {
								r()(e, t, a[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(a)
						  )
						: Ge(Object(a)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(a, t)
								);
						  });
				}
				return e;
			}
			var Me = { timeout: 3e3, position: w.b.TOP_RIGHT };
			function Ye() {
				Je();
				q();
				var e = Object(L.a)();
				return s.a.createElement(
					s.a.Fragment,
					null,
					s.a.createElement(
						w.a,
						c()({ template: qe.a }, Me),
						s.a.createElement(Y.IconRegistry, {
							icons: We.EvaIconsPack,
						}),
						s.a.createElement(
							u.b,
							null,
							s.a.createElement(
								_,
								null,
								s.a.createElement(Qe, { colorScheme: e })
							)
						)
					)
				);
			}
			var Qe = function (e) {
					var t,
						a,
						n = e.colorScheme,
						r = q(),
						l = s.a.useContext(k).settings;
					return r && null != l && null != (t = l.theme) && t.colors
						? s.a.createElement(
								Y.ApplicationProvider,
								c()({}, Ve, {
									theme: Ue(
										Ue({}, Ve.light),
										(null == (a = l.theme)
											? void 0
											: a.colors) || {}
									),
									customMapping: Fe,
								}),
								s.a.createElement(Ae, { colorScheme: n }),
								s.a.createElement(o.a, null)
						  )
						: s.a.createElement(
								d.a,
								{
									style: {
										width: "100%",
										height: "100%",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: "rgba(0,0,0,0.2)",
									},
								},
								s.a.createElement(Ke.a, {
									type: "Bars",
									color: "white",
									height: 60,
									width: 150,
								})
						  );
				},
				Je = function () {
					if ("web" == m.a.OS) {
						var e = document.createElement("style");
						return (
							(e.textContent =
								"\ntextarea, select, input, button {\n\t-webkit-appearance: none;\n\toutline: none!important;\n}\ntextarea:focus, select:focus, input:focus, button:focus {\n\t-webkit-appearance: none;\n\toutline: none!important;\n}\n"),
							document.head.append(e)
						);
					}
				};
		},
		496: function (e, t, a) {
			e.exports = a(1419);
		},
		527: function (e, t, a) {
			var n = {
				"./ar": 269,
				"./ar.js": 269,
				"./az": 270,
				"./az.js": 270,
				"./be": 271,
				"./be.js": 271,
				"./bg": 272,
				"./bg.js": 272,
				"./bs": 273,
				"./bs.js": 273,
				"./ca": 274,
				"./ca.js": 274,
				"./cs": 275,
				"./cs.js": 275,
				"./cy": 276,
				"./cy.js": 276,
				"./da": 277,
				"./da.js": 277,
				"./de": 278,
				"./de.js": 278,
				"./el": 279,
				"./el.js": 279,
				"./en": 203,
				"./en.js": 203,
				"./es": 280,
				"./es.js": 280,
				"./et": 281,
				"./et.js": 281,
				"./eu": 282,
				"./eu.js": 282,
				"./fa": 283,
				"./fa.js": 283,
				"./fi": 284,
				"./fi.js": 284,
				"./fr": 285,
				"./fr.js": 285,
				"./hr": 286,
				"./hr.js": 286,
				"./hu": 287,
				"./hu.js": 287,
				"./id": 288,
				"./id.js": 288,
				"./it": 289,
				"./it.js": 289,
				"./ja": 290,
				"./ja.js": 290,
				"./ka": 291,
				"./ka.js": 291,
				"./ko": 292,
				"./ko.js": 292,
				"./lt": 293,
				"./lt.js": 293,
				"./lv": 294,
				"./lv.js": 294,
				"./mk": 295,
				"./mk.js": 295,
				"./mn": 296,
				"./mn.js": 296,
				"./ms": 297,
				"./ms.js": 297,
				"./nb_NO": 298,
				"./nb_NO.js": 298,
				"./nl": 299,
				"./nl.js": 299,
				"./pl": 300,
				"./pl.js": 300,
				"./pt": 301,
				"./pt.js": 301,
				"./pt_BR": 302,
				"./pt_BR.js": 302,
				"./ro": 303,
				"./ro.js": 303,
				"./ru": 304,
				"./ru.js": 304,
				"./se": 305,
				"./se.js": 305,
				"./sl": 306,
				"./sl.js": 306,
				"./sq": 307,
				"./sq.js": 307,
				"./sr": 308,
				"./sr.js": 308,
				"./sv": 309,
				"./sv.js": 309,
				"./tr": 310,
				"./tr.js": 310,
				"./ua": 311,
				"./ua.js": 311,
				"./uk": 312,
				"./uk.js": 312,
				"./vi": 313,
				"./vi.js": 313,
				"./zh": 314,
				"./zh.js": 314,
				"./zh_TW": 315,
				"./zh_TW.js": 315,
			};
			function r(e) {
				var t = l(e);
				return a(t);
			}
			function l(e) {
				if (!a.o(n, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = "MODULE_NOT_FOUND"), t);
				}
				return n[e];
			}
			(r.keys = function () {
				return Object.keys(n);
			}),
				(r.resolve = l),
				(e.exports = r),
				(r.id = 527);
		},
		557: function (e, t) {},
		559: function (e, t) {},
		568: function (e, t) {},
		570: function (e, t) {},
		595: function (e, t) {},
		597: function (e, t) {},
		598: function (e, t) {},
		603: function (e, t) {},
		605: function (e, t) {},
		611: function (e, t) {},
		613: function (e, t) {},
		632: function (e, t) {},
		644: function (e, t) {},
		647: function (e, t) {},
		725: function (e, t) {},
		727: function (e, t) {},
		757: function (e, t, a) {
			e.exports = a.p + "./fonts/SpaceMono-Regular.ttf";
		},
		846: function (e, t, a) {
			e.exports = a.p + "static/media/naira.b790bc45.png";
		},
		847: function (e, t, a) {
			e.exports = a.p + "static/media/bitcoin.a4c16d5a.png";
		},
		848: function (e, t, a) {
			e.exports = a.p + "static/media/bitcoincash.ad822a4b.png";
		},
		849: function (e, t, a) {
			e.exports = a.p + "static/media/litecoin.683616fd.png";
		},
		850: function (e, t, a) {
			e.exports = a.p + "static/media/ethereum.5172b2da.png";
		},
		851: function (e, t, a) {
			e.exports = a.p + "static/media/usdt.df5ea4c9.png";
		},
		852: function (e, t, a) {
			e.exports = a.p + "static/media/trx.9189bcbb.png";
		},
		853: function (e, t, a) {
			e.exports = a.p + "static/media/doge.8dd76f99.png";
		},
		854: function (e, t, a) {
			e.exports = a.p + "static/media/bnb.db53d83a.png";
		},
		855: function (e, t, a) {
			e.exports = a.p + "static/media/xrp.a75ae7d8.png";
		},
		856: function (e, t, a) {
			e.exports = a.p + "static/media/xlm.a82538c4.png";
		},
	},
	[[496, 1, 2]],
]);
//# sourceMappingURL=app.2ea6c52c.chunk.js.map
